import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";

export default function Header() {
  return (
    <div className="w-full flex justify-between items-center ">
      <div className="flex gap-2 items-center">
        <div className="bg-gray-200 rounded-full h-12 w-12 flex justify-center items-center font-bold text-3xl shadow-sm">
          🤠
        </div>
        <div>
          <p className="text-secondary">Welcome Back</p>
          <h1 className="font-semibold">Nicolas ! 🤘</h1>
        </div>
      </div>
      <div className="p-2 rounded-full h-8 w-8 relative">
        <FontAwesomeIcon icon={faBell} size="xl" />
        <div className="w-4 h-4 rounded-full bg-[#e04444] absolute top-1 right-0"></div>
      </div>
    </div>
  );
}
