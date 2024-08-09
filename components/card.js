import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

export default function Card({
  children,
  onClick,
  selected = false,
  width = "100%",
  height = "30px",
}) {
  return (
    <div
      className={`relative card ${selected ? "card-selected" : null}`}
      style={{
        width: width,
        minHeight: height,
      }}
      onClick={onClick}
    >
      <>{children}</>
      {selected && (
        <div className="absolute w-7 h-7 align-center">
          <FontAwesomeIcon
            icon={faCheckCircle}
            size="lg"
            style={{ color: "#007BFF" }}
          />
        </div>
      )}
    </div>
  );
}
