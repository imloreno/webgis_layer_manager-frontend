import { LayerItem, Subtitle } from "@atoms";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { arrayMove, SortableContext } from "@dnd-kit/sortable";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import { useLayers } from "@hooks";
import useLayersStore from "@store/useLayersStore";
import { ILayer } from "@models/layers";

const LayerList = () => {
  // Layers handler
  const { isLoading } = useLayers();
  const { layers, setLayers } = useLayersStore();

  // Drag and drop events
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;
    const oldIndex = layers.findIndex((layer) => layer.id === active.id);
    const newIndex = layers.findIndex((layer) => layer.id === over.id);
    setLayers(arrayMove(layers, oldIndex, newIndex));
  };

  return (
    <section className="py-4 w-full mt-auto border-t border-[#1D1D26]">
      <Subtitle className="px-6 mb-4">Capas</Subtitle>

      <ul className="flex flex-col gap-y-2 mt-8 mb-4 px-6 overflow-y-auto h-72 scroll-styled">
        <DndContext
          modifiers={[restrictToVerticalAxis]}
          onDragEnd={handleDragEnd}
        >
          <SortableContext items={layers}>
            {isLoading && <p>Loading...</p>}
            {!isLoading &&
              layers.length > 0 &&
              layers.map((layer: ILayer) => (
                <LayerItem key={layer.id} {...layer} />
              ))}
          </SortableContext>
        </DndContext>
      </ul>
    </section>
  );
};

export default LayerList;
