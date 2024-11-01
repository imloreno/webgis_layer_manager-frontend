import { Customizable } from "@models/base";
import React from "react";

interface SubtitleProps extends Customizable {
  children: React.ReactNode;
  size?: string;
}

const Subtitle = ({ children, className, size = "xl" }: SubtitleProps) => {
  return <h3 className={`text-${size} font-bold ${className}`}>{children}</h3>;
};

export default Subtitle;
