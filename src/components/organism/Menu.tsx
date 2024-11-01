import { LayerList } from "@molecules";
import { LayerDetails } from "@molecules";

const Menu = () => {
  return (
    <nav className="flex flex-col bg-[#0D0D0D] border-[#BF681B] border-l min-h-[1000px]">
      <LayerList />

      <LayerDetails />
    </nav>
  );
};

export default Menu;
