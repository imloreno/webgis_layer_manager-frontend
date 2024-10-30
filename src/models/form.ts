import { UseFormRegister } from "react-hook-form";

export interface IGeoJSONBase {
  layer_file: string;
  sorting: number;
  coordinate_system: string;
  layer_name: string;
}

export type TRegister = UseFormRegister<IGeoJSONBase>;
export type TLayerName =
  | "layer_file"
  | "sorting"
  | "coordinate_system"
  | "layer_name";
export type TInputType = "text" | "number" | "file";

/*
 * --------------- Props interface section
 */

export interface IInputFileProps {
  register: any;
  label: string;
  name: TLayerName;
}

export interface InputProps {
  label: string;
  name: TLayerName;
  type: TInputType;
  register: any;
}
