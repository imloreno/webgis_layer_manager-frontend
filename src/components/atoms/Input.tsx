import { InputProps } from "@models/form";

const Input = ({ register, label, type }: InputProps) => {
  return (
    <label className="block">
      <span
        className="after:content-['*'] after:ml-0.5 
            after:text-red-500 block text-sm 
            font-medium text-label"
      >
        {label}
      </span>
      <input
        type={type}
        {...register}
        className="mt-1 px-3 
            py-2 border shadow-sm border-slate-300 
            placeholder-slate-400 focus:outline-none 
            focus:border-sky-500 focus:ring-sky-500 block 
            w-full rounded-md sm:text-sm focus:ring-1"
        placeholder="Rios, Lagos, Capitales, etc..."
      />
    </label>
  );
};

export default Input;
