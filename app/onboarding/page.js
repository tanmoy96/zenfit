"use client";
import Iconbutton from "@/components/iconbutton";
import Progressbar from "@/components/progressbar";
import Step from "@/components/step";
import { useState } from "react";
import { steps } from "@/constants";
import { useRouter } from "next/navigation";
// import BarChart from "@/components/charts/barchart";
// import DoughnutChart from "@/components/charts/doughnutChart";
// import LineChart from "@/components/charts/linechart";
export default function Onboarding() {
  const router = useRouter();

  const [questionNo, setQuestionNo] = useState(0);
  const [maxStep, setMaxStep] = useState(0);
  const [payload, setPayload] = useState({});

  const handleSelect = (stepNo, label, value) => {
    setPayload((lastPayload) => {
      return {
        ...lastPayload,
        [label]: value,
      };
    });
    if (stepNo < 11) {
      setQuestionNo(stepNo + 1);
      setMaxStep(stepNo + 1);
    } else {
      router.push("/connector");
    }
  };
  const handleBack = () => {
    setQuestionNo((lastStep) => lastStep - 1);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5">
      <div className="w-full">
        {questionNo == 0 ? (
          <div className="w-full flex justify-end mb-5">
            <Progressbar percentage={(maxStep / 12) * 100} />
          </div>
        ) : (
          <div className="w-full flex justify-between mb-5">
            <Iconbutton onClick={handleBack} />
            <Progressbar percentage={(maxStep / 12) * 100} />
          </div>
        )}
        <div className="w-full mb-5">
          {questionNo == 0 && (
            <h2 className="text-secondary font-bold">Welcome to Zenfit.</h2>
          )}
          <h1 className="font-bold">{steps[questionNo].question}</h1>
        </div>
      </div>
      <Step
        currentStep={questionNo}
        payload={payload}
        handleSelect={handleSelect}
      />
      {/* <div className="flex flex-col gap-2 w-full"> */}
      {/* <Textfield placeholder={"Name"} value={name} onInput={handleName} />
        <Switch selected={idx} onClick={handleSelect} /> */}
      {/* <LineChart />
        <BarChart />
        <DoughnutChart /> */}
      {/* </div> */}
      {steps[questionNo].components == "select" &&
        steps[questionNo].type !== "string[]" && (
          <div className="flex flex-col gap-2 w-full">
            {questionNo == 0 && (
              <>
                <p className="text-center text-secondary">
                  Already have an account?
                </p>
                <div className="w-full flex justify-center">
                  <button
                    className="text-center"
                    onClick={() => router.push("/login")}
                  >
                    Login
                  </button>
                </div>
              </>
            )}
          </div>
        )}
    </main>
  );
}
