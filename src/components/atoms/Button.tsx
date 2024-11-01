import { Icons } from "@atoms";
import { Customizable } from "@models/base";

interface ButtonProps extends Customizable {
  children: React.ReactNode;
  icon?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  variant?: "default" | "danger";
}
const Button = ({
  children,
  icon,
  onClick = () => {},
  type = "button",
  disabled = false,
  variant = "default",
  className = "",
}: ButtonProps) => {
  const dynamicClasses = `
  ${variant === "default" && "bg-success hover:bg-successHover text-text"}
  ${variant === "danger" && "bg-danger hover:bg-dangerHover text-primary"}
  ${!disabled && "hover:scale-[1.02]"}
  `;
  return (
    <button
      type={type}
      className={`px-4 h-9 text-base rounded
         disabled:bg-background disabled:cursor-not-allowed
         disabled:text-label font-bold whitespace-nowrap
         disabled:border disabled:border-border
         ${dynamicClasses} ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {icon && <Icons type={icon} className="mr-1" />}
      {children}
    </button>
  );
};

export default Button;
