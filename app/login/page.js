"use client";
import Textfield from "@/components/textfield";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "@/store/slices/user";

export default function Step({ currentStep, payload, handleSelect }) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const handleContinue = () => {
    const payload = {
      email,
      password,
    };
    dispatch(loginUser(payload));
    router.push("/onboarding");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5">
      <div className="w-full mb-5">
        <h2 className="font-bold">Welcome to Zenfit.</h2>
        <h3 className="text-secondary font-medium">
          A step towards getting healthy!
        </h3>
      </div>
      <div>
        <div className="mb-5">
          <Textfield
            idname={"email"}
            placeholder={"Email"}
            value={email}
            onInput={(e) => {
              setEmail(e.target.value);
            }}
            type={"text"}
          />
        </div>
        <div className="mb-5">
          <Textfield
            idname={"password"}
            placeholder={"Password"}
            value={password}
            onInput={(e) => {
              setPassword(e.target.value);
            }}
            type={"password"}
          />
        </div>
      </div>
      <div className="w-full flex justify-center">
        <button
          disabled={email == "" && password == ""}
          className="w-full text-center"
          onClick={handleContinue}
        >
          Continue
        </button>
      </div>
    </main>
  );
}
