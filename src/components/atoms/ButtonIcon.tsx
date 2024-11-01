import { Icons } from "@atoms";

interface ButtonIconProps {
  icon: string;
  onClick?: () => void;
}

const ButtonIcon = ({ icon, onClick }: ButtonIconProps) => {
  return (
    <button
      className="w-8 h-8 rounded bg-primary  hover:scale-110
      border border-label"
      onClick={onClick}
    >
      <Icons type={icon} />
    </button>
  );
};

export default ButtonIcon;
