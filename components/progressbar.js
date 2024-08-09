import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Progressbar({
  percentage,
  text = "",
  pathColor = `rgb(0, 123, 255)`,
}) {
  return (
    <div className="w-8 h-8">
      <CircularProgressbar
        text={`${text ? text + "%" : ""}`}
        value={percentage}
        styles={buildStyles({
          pathColor: { pathColor },
        })}
      />
    </div>
  );
}
