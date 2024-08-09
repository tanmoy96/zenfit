import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faPersonWalking } from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import Card from "../card";
import Image from "next/image";
import curve from "@/assets/curve.svg";
import Progressbar from "../progressbar";

export default function OverallStatus() {
  return (
    <div className="w-full py-3">
      <div className="flex justify-between items-center mb-2">
        <h2>Overall Status</h2>
        <div
          onClick={() => {}}
          className="flex gap-1 items-center text-secondary"
        >
          <p className="text-[12px]">See more</p>
          <FontAwesomeIcon icon={faAngleLeft} size="md" rotation={180} />
        </div>
      </div>
      <div className="box bg-white p-2 h-full rounded-xl flex flex-col justify-between gap-2">
        <div className="flex justify-between gap-2 items-center">
          <div className="h-5 w-2 bg-red-300 rounded mb-auto mt-1"></div>
          <div className="grow">
            <p className="text-[12px] text-secondary">Calories Loss</p>
            <h3 className="font-medium">12.185 Kcal</h3>
          </div>
          <div className="flex gap-1 items-end">
            <Progressbar
              percentage={50}
              text={50}
              pathColor={`rgb(69, 209, 186)`}
            />
          </div>
        </div>
        <div className="flex justify-between gap-2 items-center">
          <div className="h-5 w-2 bg-sky-500 rounded mb-auto mt-1"></div>
          <div className="grow">
            <p className="text-[12px] text-secondary">Weight Loss</p>
            <h3 className="font-medium">10.7 Kg</h3>
          </div>
          <div className="flex gap-1 items-end">
            <Progressbar
              percentage={50}
              text={50}
              pathColor={`rgb(69, 209, 186)`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
