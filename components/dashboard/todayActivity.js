import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faPersonWalking } from "@fortawesome/free-solid-svg-icons";
import Card from "../card";
import Image from "next/image";
import curve from "@/assets/curve.svg";

export default function TodayActivity() {
  return (
    <div className="w-full py-3">
      <div className="mb-5">
        <div className="flex justify-between items-center mb-2">
          {/* <h2>Today's Activity</h2> */}
          <h2>Week 1 Activity</h2>
          <div onClick={() => {}}>
            <FontAwesomeIcon icon={faPenToSquare} size="md" />
          </div>
        </div>
        <div className="">
          {/* <div className="bg-[#C65467] h-[200px] rounded-lg w-full col-span-1 pt-3 flex flex-col">
          <div className="w-[60px] h-[60px] p-2 rounded-lg bg-[#A43B56] flex justify-center items-center mx-auto">
            <FontAwesomeIcon icon={faPersonWalking} color="white" size="xl" />
          </div>
          <h2 className="font-bold text-dark text-center mt-2">1356</h2>
          <div className="grow flex flex-col justify-end">
            <Image
              priority
              src={curve}
              width={300}
              alt="Follow us on Twitter"
            />
            <div className="bg-[#ffffff55] h-5 w-full"></div>
          </div>
        </div> */}
          <div className="">
            <h3 className="text-secondary">Day 1 Activity</h3>
            <div className="box bg-white p-2 h-full rounded-xl flex flex-col justify-between gap-2 mb-5">
              <div className="flex justify-between gap-2 items-center">
                <div className="h-5 w-2 bg-red-300 rounded mb-auto mt-1"></div>
                <div className="grow">
                  <h2 className="font-semibold">Push-ups</h2>
                  <p className="text-[12px] text-secondary">
                    Biceps, triceps, shoulder
                  </p>
                </div>
                <div className="flex gap-1 items-end">
                  <h3 className="font-semibold">15</h3>
                  <p className="text-[14px] text-secondary">x 3</p>
                </div>
              </div>
              <div className="flex justify-between gap-2 items-center">
                <div className="h-5 w-2 bg-amber-400 rounded mb-auto mt-1"></div>
                <div className="grow">
                  <h2 className="font-semibold">Squads</h2>
                  <p className="text-[12px] text-secondary">
                    calves, legs, thighs
                  </p>
                </div>
                <div className="flex gap-1 items-end">
                  <h3 className="font-semibold">25</h3>
                  <p className="text-[14px] text-secondary">x 3</p>
                </div>
              </div>
              <div className="flex justify-between gap-2 items-center">
                <div className="h-5 w-2 bg-sky-500 rounded mb-auto mt-1"></div>
                <div className="grow">
                  <h2 className="font-semibold">Lunges</h2>
                  <p className="text-[12px] text-secondary">
                    calves, hamstring, glutes
                  </p>
                </div>
                <div className="flex gap-1 items-end">
                  <h3 className="font-semibold">15</h3>
                  <p className="text-[14px] text-secondary">x 3</p>
                </div>
              </div>
            </div>
            <h3 className="text-secondary">Day 2 Activity</h3>
            <div className="box bg-white p-2 h-full rounded-xl flex flex-col justify-between gap-2">
              <div className="flex justify-between gap-2 items-center">
                <div className="h-5 w-2 bg-red-300 rounded mb-auto mt-1"></div>
                <div className="grow">
                  <h2 className="font-semibold">Push-ups</h2>
                  <p className="text-[12px] text-secondary">
                    Biceps, triceps, shoulder
                  </p>
                </div>
                <div className="flex gap-1 items-end">
                  <h3 className="font-semibold">15</h3>
                  <p className="text-[14px] text-secondary">x 3</p>
                </div>
              </div>
              <div className="flex justify-between gap-2 items-center">
                <div className="h-5 w-2 bg-amber-400 rounded mb-auto mt-1"></div>
                <div className="grow">
                  <h2 className="font-semibold">Squads</h2>
                  <p className="text-[12px] text-secondary">
                    calves, legs, thighs
                  </p>
                </div>
                <div className="flex gap-1 items-end">
                  <h3 className="font-semibold">25</h3>
                  <p className="text-[14px] text-secondary">x 3</p>
                </div>
              </div>
              <div className="flex justify-between gap-2 items-center">
                <div className="h-5 w-2 bg-sky-500 rounded mb-auto mt-1"></div>
                <div className="grow">
                  <h2 className="font-semibold">Lunges</h2>
                  <p className="text-[12px] text-secondary">
                    calves, hamstring, glutes
                  </p>
                </div>
                <div className="flex gap-1 items-end">
                  <h3 className="font-semibold">15</h3>
                  <p className="text-[14px] text-secondary">x 3</p>
                </div>
              </div>
            </div>
            <h3 className="text-secondary">Day 3 Activity</h3>
            <div className="box bg-white p-2 h-full rounded-xl flex flex-col justify-between gap-2 mb-5">
              <div className="flex justify-between gap-2 items-center">
                <div className="h-5 w-2 bg-red-300 rounded mb-auto mt-1"></div>
                <div className="grow">
                  <h2 className="font-semibold">Push-ups</h2>
                  <p className="text-[12px] text-secondary">
                    Biceps, triceps, shoulder
                  </p>
                </div>
                <div className="flex gap-1 items-end">
                  <h3 className="font-semibold">15</h3>
                  <p className="text-[14px] text-secondary">x 3</p>
                </div>
              </div>
              <div className="flex justify-between gap-2 items-center">
                <div className="h-5 w-2 bg-amber-400 rounded mb-auto mt-1"></div>
                <div className="grow">
                  <h2 className="font-semibold">Squads</h2>
                  <p className="text-[12px] text-secondary">
                    calves, legs, thighs
                  </p>
                </div>
                <div className="flex gap-1 items-end">
                  <h3 className="font-semibold">25</h3>
                  <p className="text-[14px] text-secondary">x 3</p>
                </div>
              </div>
              <div className="flex justify-between gap-2 items-center">
                <div className="h-5 w-2 bg-sky-500 rounded mb-auto mt-1"></div>
                <div className="grow">
                  <h2 className="font-semibold">Lunges</h2>
                  <p className="text-[12px] text-secondary">
                    calves, hamstring, glutes
                  </p>
                </div>
                <div className="flex gap-1 items-end">
                  <h3 className="font-semibold">15</h3>
                  <p className="text-[14px] text-secondary">x 3</p>
                </div>
              </div>
            </div>
            <h3 className="text-secondary">Day 4 Activity</h3>
            <div className="box bg-white p-2 h-full rounded-xl flex flex-col justify-between gap-2 mb-5">
              <div className="flex justify-between gap-2 items-center">
                <div className="h-5 w-2 bg-red-300 rounded mb-auto mt-1"></div>
                <div className="grow">
                  <h2 className="font-semibold">Push-ups</h2>
                  <p className="text-[12px] text-secondary">
                    Biceps, triceps, shoulder
                  </p>
                </div>
                <div className="flex gap-1 items-end">
                  <h3 className="font-semibold">15</h3>
                  <p className="text-[14px] text-secondary">x 3</p>
                </div>
              </div>
              <div className="flex justify-between gap-2 items-center">
                <div className="h-5 w-2 bg-amber-400 rounded mb-auto mt-1"></div>
                <div className="grow">
                  <h2 className="font-semibold">Squads</h2>
                  <p className="text-[12px] text-secondary">
                    calves, legs, thighs
                  </p>
                </div>
                <div className="flex gap-1 items-end">
                  <h3 className="font-semibold">25</h3>
                  <p className="text-[14px] text-secondary">x 3</p>
                </div>
              </div>
              <div className="flex justify-between gap-2 items-center">
                <div className="h-5 w-2 bg-sky-500 rounded mb-auto mt-1"></div>
                <div className="grow">
                  <h2 className="font-semibold">Lunges</h2>
                  <p className="text-[12px] text-secondary">
                    calves, hamstring, glutes
                  </p>
                </div>
                <div className="flex gap-1 items-end">
                  <h3 className="font-semibold">15</h3>
                  <p className="text-[14px] text-secondary">x 3</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <Progressbar percentage={50} pathColor={`rgb(69, 209, 186)`} /> */}
    </div>
  );
}
