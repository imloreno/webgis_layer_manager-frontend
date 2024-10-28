import { useState } from "react";
import { AddLayerForm, LayerList } from "@molecules";
import { LayerDetails } from "@molecules";
import { Button } from "@atoms";

const Menu = () => {
  const [showAddLayerForm, setShowAddLayerForm] = useState(false);

  // Handlers
  const handleAddLayerDisplay = () => setShowAddLayerForm(!showAddLayerForm);

  return (
    <nav className="flex flex-col bg-[#0D0D0D] border-[#BF681B] border-l h-full min-h-[1000px]">
      <LayerDetails />
      <LayerList />

      <div className="px-8 mb-8 flex justify-center">
        <Button icon="add" onClick={handleAddLayerDisplay}>
          Agregar capa
        </Button>
        <AddLayerForm
          isOpen={showAddLayerForm}
          onClose={handleAddLayerDisplay}
        />
      </div>
    </nav>
  );
};

export default Menu;
