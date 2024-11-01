import { useState } from "react";
import { Button } from "@atoms";
import { AddLayerForm } from "@molecules";

const AddLayerButton = () => {
  const [showAddLayerForm, setShowAddLayerForm] = useState(false);

  // Handlers
  const handleAddLayerDisplay = () => setShowAddLayerForm(!showAddLayerForm);

  return (
    <>
      <Button icon="sheet" onClick={handleAddLayerDisplay}>
        Agregar
      </Button>
      <AddLayerForm isOpen={showAddLayerForm} onClose={handleAddLayerDisplay} />
    </>
  );
};

export default AddLayerButton;
