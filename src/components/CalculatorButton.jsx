import { twMerge } from "tailwind-merge";

export default function CalculatorButton({
  children,
  className,
  onClick
}) {
  return (
    <button
      onClick={onClick}
      className={twMerge(
        `
        bg-slate-200
        rounded-xl
        py-4
        text-xl
        font-semibold
        shadow
        hover:brightness-95
        active:scale-95
        transition
        `,
        className
      )}
    >
      {children}
    </button>
  );
}