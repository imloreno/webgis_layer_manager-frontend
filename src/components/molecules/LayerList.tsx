import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import { arrayMove, SortableContext } from "@dnd-kit/sortable";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { Icons, LayerItem, Subtitle } from "@atoms";
import { useLayers } from "@hooks";
import useLayersStore from "@store/useLayersStore";
import { ILayer } from "@models/layers";
import { AddLayerButton } from "@molecules";

const LayerList = () => {
  // Layers handler
  const { isLoading } = useLayers();
  const { layers, setLayers, selectLayer } = useLayersStore();

  // Drag and drop events
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;
    const oldIndex = layers.findIndex((layer) => layer.id === active.id);
    const newIndex = layers.findIndex((layer) => layer.id === over.id);
    setLayers(arrayMove(layers, oldIndex, newIndex));
  };

  return (
    <section className="py-6 w-full">
      <div className="flex justify-between">
        <Subtitle className="px-6 mb-4">
          <Icons type="layers" className="text-label" /> Capas
        </Subtitle>
        <AddLayerButton />
      </div>

      <ul className="flex flex-col gap-y-2 mt-8 mb-4 px-6 overflow-y-auto m-h-72 min-h-10 scroll-styled">
        <DndContext
          modifiers={[restrictToVerticalAxis]}
          onDragEnd={handleDragEnd}
        >
          <SortableContext items={layers}>
            {isLoading && <p>Loading...</p>}
            {!isLoading &&
              layers.length > 0 &&
              layers.map((layer: ILayer) => (
                <LayerItem
                  key={layer.id}
                  {...layer}
                  onDoubleClick={() => selectLayer(layer.id)}
                />
              ))}
            {layers.length === 0 && (
              <p className="text-xs text-label">
                Aún no hay capas, haga click en "Agregar Capa" para crear una
                capa nueva.
              </p>
            )}
          </SortableContext>
        </DndContext>
      </ul>
    </section>
  );
};

export default LayerList;
