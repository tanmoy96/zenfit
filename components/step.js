"use client";
import Card from "@/components/card";
import Textfield from "@/components/textfield";
import Switch from "@/components/switch";
import { useEffect, useState } from "react";
import { steps } from "@/constants";

export default function Step({ currentStep, payload, handleSelect }) {
  const [unitSelected, setunitSelected] = useState("");
  const [textValue, setTextvalue] = useState("");
  const [selectedoptions, setSelectedOption] = useState([]);

  useEffect(() => {
    setunitSelected(
      payload[steps[currentStep].fieldName]?.units ??
        steps[currentStep]?.units?.[0] ??
        ""
    );
    setTextvalue(
      payload[steps[currentStep].fieldName]?.value ??
        payload[steps[currentStep].fieldName] ??
        ""
    );
    setSelectedOption(payload[steps[currentStep].fieldName] ?? []);
  }, [currentStep]);

  const handleUnitsSelect = (value) => {
    setunitSelected(value);
  };

  const handleContinue = () => {
    let val = textValue;
    if (steps[currentStep]?.units) {
      val = {
        value: textValue,
        units: unitSelected,
      };
    }
    handleSelect(currentStep, steps[currentStep].fieldName, val);
  };
  const handleSelectContinue = () => {
    handleSelect(currentStep, steps[currentStep].fieldName, selectedoptions);
  };

  const SelectOptionsMultiple = () => {
    return (
      <>
        <div className="flex flex-col gap-2 w-full mb-5">
          {steps[currentStep]?.options?.map((opt, idx) => (
            <Card
              key={idx}
              selected={selectedoptions.includes(opt)}
              onClick={() => {
                if (!selectedoptions.includes(opt)) {
                  setSelectedOption((lastStep) => [...lastStep, opt]);
                } else {
                  setSelectedOption((lastStep) =>
                    lastStep.filter((o) => o != opt)
                  );
                }
              }}
            >
              <h3>{opt}</h3>
            </Card>
          ))}
        </div>
        <div className="w-full flex justify-center">
          <button
            disabled={selectedoptions?.length == 0}
            className="w-full text-center"
            onClick={handleSelectContinue}
          >
            Continue
          </button>
        </div>
      </>
    );
  };

  const SelectOptions = () => {
    return (
      <div className="flex flex-col gap-2 w-full mb-5">
        {steps[currentStep]?.options?.map((opt, idx) => (
          <Card
            key={idx}
            selected={payload[steps[currentStep].fieldName] === opt}
            onClick={() => {
              handleSelect(currentStep, steps[currentStep].fieldName, opt);
            }}
          >
            <h3>{opt}</h3>
          </Card>
        ))}
      </div>
    );
  };

  const Text = () => {
    return (
      <>
        <div className="mb-5">
          <Textfield
            idname={steps[currentStep].fieldName}
            placeholder={steps[currentStep]?.placeholder}
            value={
              textValue ??
              payload[steps[currentStep].fieldName]?.value ??
              payload[steps[currentStep].fieldName]
            }
            onInput={(e) => {
              setTextvalue(e.target.value);
            }}
            type={steps[currentStep].type}
          />
          {steps[currentStep]?.units && (
            <div className="w-full flex justify-center mt-5">
              <Switch
                selected={unitSelected}
                onClick={handleUnitsSelect}
                options={steps[currentStep].units}
              />
            </div>
          )}
        </div>
        <div className="w-full flex justify-center">
          <button
            disabled={textValue == ""}
            className="w-full text-center"
            onClick={handleContinue}
          >
            Continue
          </button>
        </div>
      </>
    );
  };

  return (
    <>
      {steps[currentStep]?.type === "string[]" && <SelectOptionsMultiple />}
      {steps[currentStep]?.type !== "string[]" &&
        steps[currentStep]?.components == "select" && <SelectOptions />}
      {steps[currentStep]?.components == "textbox" && <Text />}

      {/* <Textfield placeholder={"Name"} value={name} onInput={handleName} />
        <Switch selected={idx} onClick={handleSelect} /> */}
      {/* <LineChart />
        <BarChart />
        <DoughnutChart /> */}
    </>
  );
}
