import { useState } from "react";
import { get, isEmpty } from "lodash";
import { Button } from "@atoms";
import useLayersStore from "@store/useLayersStore";
import { Dialog } from "@templates";
import { useLayers } from "@hooks";

const RemoveLayer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { selectedLayer, toggleSelectedLayer } = useLayersStore(
    (state) => state
  );
  const { deleteLayer, isRemoving } = useLayers();

  // Event handlers
  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);
  const handleSuccess = () => {
    deleteLayer(get(selectedLayer, "id") || "");
    toggleSelectedLayer("");
    handleClose();
  };

  return (
    <div>
      <Button
        icon="trash"
        variant="danger"
        disabled={isEmpty(selectedLayer) || isRemoving}
        onClick={handleOpen}
      >
        Eliminar
      </Button>
      <Dialog isOpen={isOpen} onClose={handleClose}>
        <div className="p-8">
          <h2 className="text-2xl text-tertiary font-bold mb-4">
            Eliminar capa
          </h2>
          <p className="text-base text-label">
            ¿Estás seguro de que deseas eliminar la capa seleccionada?
          </p>
          <div className="flex gap-x-4 mt-8">
            <Button variant="danger" onClick={handleSuccess}>
              Eliminar
            </Button>
            <Button onClick={handleClose}>Cancelar</Button>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default RemoveLayer;
