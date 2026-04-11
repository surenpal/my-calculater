export default function Display({ prevValue, curValue, operation }) {
  const isError = curValue === "Error";

  return (
    <div className="
      bg-black/50 text-white
      rounded-2xl px-5 py-4 mb-5
      text-right select-none
    ">
      {/* Expression history */}
      <div className="text-slate-400 text-sm h-5 truncate">
        {prevValue && operation ? `${prevValue} ${operation}` : "\u00A0"}
      </div>

      {/* Current value */}
      <div className={`
        font-bold mt-1 truncate transition-colors duration-150
        ${isError ? "text-red-400 text-3xl" : "text-white text-4xl"}
      `}>
        {curValue || "0"}
      </div>
    </div>
  );
}
