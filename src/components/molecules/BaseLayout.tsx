import AddLayerForm from "./AddLayerForm"

const BaseLayout = () => {
   return (
      <div className="grid grid-cols-4 h-screen">
         <div className="col-span-3">
            <p>Something</p>
         </div>
         <div className="bg-[#212226] border-[#6b6f7f] border-l py-5 px-8">
            <AddLayerForm />
         </div>
      </div>
   )
}

export default BaseLayout