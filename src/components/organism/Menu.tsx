import { AddLayerForm, LayerList } from "@molecules"

const Menu = () => {
   return (
      <nav>
         <LayerList />
         <AddLayerForm isOpen={false} />
      </nav>
   )
}

export default Menu