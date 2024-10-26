import Icons from "@atoms/Icons"
import { ReactNode } from "react"

interface DialogProps {
   children: ReactNode
   isOpen: boolean
   onClose?: () => void
}

const Dialog = ({ children, isOpen, onClose = () => { } }: DialogProps) => {

   const handleOnClose = () => {
      onClose()
   }

   if (!isOpen) return <></>
   return (
      <section className="fixed h-screen 
         w-screen top-0 left-0 bg-[#1f242bbf] 
         flex items-center justify-center z-[9999]"
      >
         <article className="w-[30rem] min-h-96 bg-[#212226] border border-[#383838] rounded-lg p-8 relative">
            <div className="flex items-center 
               justify-center w-4 h-4 bg-[red] right-8 top-8 
               absolute p-3 cursor-pointer rounded hover:scale-110
               bg-rose-600"
               onClick={handleOnClose}
            >
               <Icons type="close" className="text-2xl" />
            </div>
            {children}
         </article>
      </section>
   )
}

export default Dialog