import { IInputFileProps } from "@models/form";
import styles from "./inputFile.module.css"

const InputFile = ({ register, label, layerName }: IInputFileProps) => {
   return (<div>
      <label className={`cursor-pointer w-fit ${styles.inputFile}`}>
         <span className="text-gray-500 font-medium text-gray-500">{label}</span>
         <input type="file" {...register(layerName)} className="block w-fit
            text-sm text-slate-500 cursor-pointer
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-violet-50 file:text-violet-700
            file:cursor-pointer
            hover:file:bg-violet-100"
            accept=".geojson"
            onChange={(e) => {
               console.log(e.target.files);
            }}
         />
      </label>
   </div >
   )
}

export default InputFile