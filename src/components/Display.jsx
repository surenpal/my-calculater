export default function Display({
  prevValue,
  curValue,
  operation
}) {
  return (
    <div
      className="
      bg-black/70
      text-white
      rounded-2xl
      p-4
      mb-5
      text-right
      "
    >
      <div className="text-gray-400 text-lg h-6">
        {prevValue} {operation}
      </div>

      <div className="text-5xl font-bold overflow-hidden whitespace-nowrap">
        {curValue || "0"}
      </div>
    </div>
  );
}