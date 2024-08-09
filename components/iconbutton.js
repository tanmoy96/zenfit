import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

export default function Iconbutton({ icon, onClick }) {
  return (
    <div
      className="w-8 h-8 rounded-full bg-slate-200 flex justify-center items-center"
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faAngleLeft} size="lg" />
    </div>
  );
}
