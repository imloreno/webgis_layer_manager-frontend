import { LayerList } from "@molecules";
import { LayerDetails, DrawerForm } from "@molecules";
import useLeafletDrawingStore from "@store/useLeafletDrawingStore";

const Menu = () => {
  const { isDrawing } = useLeafletDrawingStore((state) => state);
  return (
    <nav className="flex flex-col bg-[#0D0D0D] border-[#BF681B] border-l min-h-[1000px]">
      {isDrawing ? (
        <DrawerForm />
      ) : (
        <>
          <LayerList />
          <LayerDetails />
        </>
      )}
    </nav>
  );
};

export default Menu;
