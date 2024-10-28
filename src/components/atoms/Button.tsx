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
      className="py-2 px-4 text-base
         bg-[#F27F3D] hover:bg-[#F29D52] rounded
         disabled:bg-[#1D1D26] disabled:cursor-not-allowed
         text-[#1D1D26] font-bold"
      disabled={disabled}
      onClick={onClick}
    >
      {icon && <Icons type={icon} className="mr-2" />}
      {children}
    </button>
  );
};

export default Button;
