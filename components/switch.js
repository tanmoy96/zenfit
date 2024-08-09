export default function Switch({ selected, onClick, options }) {
  return (
    <div className="switch w-fit rounded-full bg-slate-200 flex justify-center items-center">
      <button
        className={`${selected == options[0] ? "selected" : null}`}
        onClick={() => {
          onClick(options[0]);
        }}
      >
        {options[0]}
      </button>
      <button
        className={`${selected == options[1] ? "selected" : null}`}
        onClick={() => {
          onClick(options[1]);
        }}
      >
        {options[1]}
      </button>
    </div>
  );
}
