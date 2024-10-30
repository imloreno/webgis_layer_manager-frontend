import { IInputFileProps } from "@models/form";
import styles from "./inputFile.module.css";

const InputFile = ({ register, label }: IInputFileProps) => {
  return (
    <div>
      <label className={`cursor-pointer w-fit ${styles.inputFile}`}>
        <span
          className="text-label font-medium text-sm 
            after:content-['*'] after:ml-0.5 
            after:text-red-500"
        >
          {label}
        </span>
        <input
          type="file"
          {...register}
          className="block w-fit
            text-sm text-primary cursor-pointer
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-secondary file:text-background
            file:cursor-pointer
            hover:file:bg-tertiary"
          accept=".geojson"
          onChange={(e) => {
            // console.log(e.target.files);
          }}
        />
      </label>
    </div>
  );
};

export default InputFile;
