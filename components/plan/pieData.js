import DoughnutChart from "@/components/charts/doughnutChart";

export default function PieData() {
  return (
    <div className="box bg-white p-3 h-full w-full rounded-xl grid grid-cols-2 gap-4">
      <div>
        <DoughnutChart />
      </div>
      <div className="">
        <h3 className="font-medium mb-3">Steps monitoring</h3>
        <div className="flex justify-between gap-1">
          <h4 className="font-medium">Walked</h4>
          <p className="text-[14px] text-secondary">1000 steps</p>
        </div>
        <div className="flex justify-between gap-1">
          <h4 className="font-medium">Running</h4>
          <p className="text-[14px] text-secondary">600 steps</p>
        </div>
        <div className="flex justify-between gap-1">
          <h4 className="font-medium">Swimming</h4>
          <p className="text-[14px] text-secondary">258 mts</p>
        </div>
      </div>
    </div>
  );
}
