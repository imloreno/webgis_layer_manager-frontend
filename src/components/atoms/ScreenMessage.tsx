import { ReactNode } from "react";

interface ScreenMessageProps {
  children: ReactNode;
}

const ScreenMessage = ({ children }: ScreenMessageProps) => {
  return (
    <div
      className="z-[999999] bg-background fixed 
      w-full h-full left-0 top-0 text-secondary 
      text-lg grid place-items-center mouse-default 
      pointer-events-none user-select-none"
    >
      <p>{children}</p>
    </div>
  );
};

export default ScreenMessage;
