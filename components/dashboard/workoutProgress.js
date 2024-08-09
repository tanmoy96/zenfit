import Progressbar from "../progressbar";

export default function WorkoutProgress() {
  return (
    <div className="w-full flex justify-between items-center bg-dark rounded-2xl px-4 py-3 my-5">
      <div>
        <h2 className="font-semibold">Workout Progress</h2>
        <p className="text-secondary">12 Excercise Left</p>
      </div>
      <Progressbar percentage={50} pathColor={`rgb(69, 209, 186)`} />
    </div>
  );
}
