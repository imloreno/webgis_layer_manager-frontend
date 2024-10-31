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
      <LayerList />

      <div className="p-4 flex border-b border-t border-[#1D1D26]">
        <Button icon="add" onClick={handleAddLayerDisplay}>
          Agregar
        </Button>
        <AddLayerForm
          isOpen={showAddLayerForm}
          onClose={handleAddLayerDisplay}
        />
      </div>
      <LayerDetails />
    </nav>
  );
};

export default Menu;
