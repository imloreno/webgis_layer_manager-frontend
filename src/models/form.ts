import { InputHTMLAttributes } from "react";
import { UseFormRegister } from "react-hook-form";

export interface IGeoJSONBase {
  layer_file: string;
  sorting: number;
  layer_name: string;
}

export type TRegister = UseFormRegister<IGeoJSONBase>;
export type TLayerName = "layer_file" | "sorting" | "layer_name";
export type TInputType = "text" | "number" | "file";

/*
 * --------------- Props interface section
 */
export interface IInputFileProps extends InputHTMLAttributes<HTMLInputElement> {
  register: any;
  label: string;
  name: TLayerName;
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: TLayerName;
  type: TInputType;
  register: any;
}
