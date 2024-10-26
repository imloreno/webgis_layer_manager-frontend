import { Customizable } from "@models/base";
import React from "react";

interface SubtitleProps extends Customizable {
  children: React.ReactNode;
}

const Subtitle = ({ children, className }: SubtitleProps) => {
  return (
    <h3 className={`text-xl font-bold ${className} text-[#F29D52]`}>
      {children}
    </h3>
  );
};

export default Subtitle;
