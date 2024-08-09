"use client";

import Header from "@/components/dashboard/header";
import OverallStatus from "@/components/dashboard/overallStatus";
import TodayActivity from "@/components/dashboard/todayActivity";
import WorkoutProgress from "@/components/dashboard/workoutProgress";
import Menu from "@/components/Menu";

export default function Onboarding() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5">
      <Header />
      <WorkoutProgress />
      <TodayActivity />
      {/* <OverallStatus /> */}
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <Menu />
    </main>
  );
}
