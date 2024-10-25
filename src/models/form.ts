import { UseFormRegister } from "react-hook-form";

export interface IGeoJSONBase {
   layer_file: string;
   sorting: number;
   coordinate_system: string;
   layer_name: string;
}

export type TRegister = UseFormRegister<IGeoJSONBase>
export type TLayerName = "layer_file" | "sorting" | "coordinate_system" | "layer_name"


/*
* --------------- Props interface section
*/

export interface IInputFileProps {
   register: TRegister;
   label: string;
   layerName: TLayerName
}

export interface InputProps {
   label: string;
   layerName: TLayerName
   type: "text" | "number" | "file";
   register: TRegister;
}