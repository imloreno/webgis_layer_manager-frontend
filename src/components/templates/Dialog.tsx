import { MouseEvent, ReactNode } from "react";
import { Icons } from "@atoms";
import { Customizable } from "@models/base";

interface DialogProps extends Customizable {
  children: ReactNode;
  isOpen: boolean;
  onClose?: () => void;
}

const Dialog = ({
  children,
  isOpen,
  onClose = () => {},
  className = "",
}: DialogProps) => {
  const handleOnClose = () => {
    onClose();
  };
  const handleBackgroundClick = (e: MouseEvent<HTMLElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return <></>;
  return (
    <section
      className="fixed h-screen 
         w-screen top-0 left-0 bg-[#1f242bbf] 
         flex items-center justify-center z-[9999]"
      onClick={handleBackgroundClick}
    >
      <article
        className={`w-[30rem] bg-[#212226] 
        border border-[#383838] rounded-lg p-8 relative
        ${className}`}
      >
        <div
          className="flex items-center 
               justify-center w-4 h-4 right-8 top-8 
               absolute p-3 cursor-pointer rounded hover:scale-110
               bg-danger"
          onClick={handleOnClose}
        >
          <Icons type="close" className="text-2xl" />
        </div>
        {children}
      </article>
    </section>
  );
};

export default Dialog;
