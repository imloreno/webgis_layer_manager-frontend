import { useState } from "react";
import { LayerItem, Subtitle } from "@atoms";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { arrayMove, SortableContext } from "@dnd-kit/sortable";
import { LayerItemProps } from "@atoms";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";

// TODO: Replace with API call
const layers: LayerItemProps[] = [
  { id: 1, sort: 1, name: "Ríos", isVisible: true },
  { id: 2, sort: 2, name: "Lagos", isVisible: true },
  { id: 3, sort: 3, name: "Capitales", isVisible: true },
  { id: 4, sort: 4, name: "Estados", isVisible: true },
];

const LayerList = () => {
  // TODO: Replace with API call
  const [layerItems, setLayerItems] = useState<LayerItemProps[]>(layers);

  // Drag and drop events
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;
    const oldIndex = layerItems.findIndex((layer) => layer.id === active.id);
    const newIndex = layerItems.findIndex((layer) => layer.id === over.id);
    setLayerItems(arrayMove(layerItems, oldIndex, newIndex));
  };

  return (
    <>
      <Subtitle className="pt-5 px-8">Capas</Subtitle>
      <hr />

      <ul className="flex flex-col gap-y-2 my-[2rem] px-8">
        <DndContext
          modifiers={[restrictToVerticalAxis]}
          onDragEnd={handleDragEnd}
        >
          <SortableContext items={layerItems}>
            {layerItems.map((layer: LayerItemProps) => (
              <LayerItem key={layer.id} {...layer} />
            ))}
          </SortableContext>
        </DndContext>
      </ul>
    </>
  );
};

export default LayerList;
