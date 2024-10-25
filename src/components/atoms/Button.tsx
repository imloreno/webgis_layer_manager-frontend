interface ButtonProps {
   label: string;
}
const Button = ({ label }: ButtonProps) => {
   return (
      <button type="submit" className="py-2 mt-4 px-4 
         bg-violet-700 hover:bg-violet-600 rounded w-40 
         disabled:bg-gray-500 disabled:cursor-not-allowed"
      // disabled={true}
      >
         {label}
      </button>
   )
}

export default Button