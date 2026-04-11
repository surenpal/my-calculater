import { twMerge } from "tailwind-merge";

const variants = {
  default:  "bg-white/15 text-white hover:bg-white/25",
  operator: "bg-orange-500 text-white hover:bg-orange-400",
  equals:   "bg-blue-500 text-white hover:bg-blue-400",
  clear:    "bg-rose-500 text-white hover:bg-rose-400",
  action:   "bg-white/10 text-amber-300 hover:bg-white/20",
};

export default function CalculatorButton({ children, className, onClick, variant = "default" }) {
  return (
    <button
      onClick={onClick}
      className={twMerge(
        `
        rounded-2xl py-4
        text-xl font-semibold
        cursor-pointer select-none
        shadow-md
        active:scale-90
        transition-all duration-100 ease-out
        `,
        variants[variant],
        className
      )}
    >
      {children}
    </button>
  );
}
