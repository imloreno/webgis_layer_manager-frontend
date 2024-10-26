import { Icons } from "@atoms";

interface ButtonProps {
  children: React.ReactNode;
  icon?: string;
}
const Button = ({ children, icon }: ButtonProps) => {
  return (
    <button
      type="submit"
      className="py-2 px-4 text-lg
         bg-[#F27F3D] hover:bg-[#F29D52] rounded
         disabled:bg-[#1D1D26] disabled:cursor-not-allowed
         text-[#1D1D26] font-bold"
      // disabled={true}
    >
      {icon && <Icons type={icon} className="mr-2" />}
      {children}
    </button>
  );
};

export default Button;
