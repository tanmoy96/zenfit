"use client";
import Loader from "@/components/loader";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Onboarding() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/plan");
    }, 3000);
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-5">
      <Loader />
      <h2>Connect your fitness Device...</h2>
    </main>
  );
}
