import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faChartSimple } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

export default function Menu() {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <div className="fixed bottom-5 px-5 w-full">
      <div className="box grid grid-cols-3 rounded-full w-full p-4">
        <div
          className="flex justify-center items-center"
          onClick={() => {
            router.push("/plan");
          }}
        >
          <FontAwesomeIcon
            icon={faChartSimple}
            size="xl"
            style={{ color: pathname === "/plan" ? "#000" : "#999" }}
          />
        </div>
        <div
          className="flex justify-center items-center"
          onClick={() => {
            router.push("/dashboard");
          }}
        >
          <FontAwesomeIcon
            icon={faHouse}
            size="xl"
            style={{ color: pathname === "/dashboard" ? "#000" : "#999" }}
          />
        </div>
        <div
          className="flex justify-center items-center"
          onClick={() => {
            router.push("/settings");
          }}
        >
          <FontAwesomeIcon
            icon={faGear}
            size="xl"
            style={{ color: pathname === "/settings" ? "#000" : "#999" }}
          />
        </div>
      </div>
    </div>
  );
}
