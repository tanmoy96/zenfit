"use client";

import BarChart from "@/components/charts/barchart";
import LineChart from "@/components/charts/linechart";
import Header from "@/components/dashboard/header";
import Menu from "@/components/Menu";
import PieData from "@/components/plan/pieData";

export default function Onboarding() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5">
      <Header />
      <LineChart />
      <PieData />
      <BarChart />
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
