import { Icons } from "@atoms";

interface ButtonProps {
  children: React.ReactNode;
  icon?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}
const Button = ({
  children,
  icon,
  onClick = () => {},
  type = "button",
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      type={type}
      className="py-2 px-4 h-10 text-base
         bg-success hover:bg-successHover rounded
         disabled:bg-background disabled:cursor-not-allowed
         disabled:text-label
         text-[#1D1D26] font-bold"
      disabled={disabled}
      onClick={onClick}
    >
      {icon && <Icons type={icon} className="mr-1" />}
      {children}
    </button>
  );
};

export default Button;
