import { AddLayerForm, LayerList } from "@molecules";
import { LayerDetails } from "@molecules";

const Menu = () => {
  return (
    <nav className="flex flex-col bg-[#0D0D0D] border-[#BF681B] border-l h-full">
      <LayerDetails />
      <LayerList />
      <AddLayerForm isOpen={false} />
    </nav>
  );
};

export default Menu;
