import { useState } from "react";
import { LayerItem, Subtitle } from "@atoms";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { arrayMove, SortableContext } from "@dnd-kit/sortable";
import { LayerItemProps } from "@atoms";

// TODO: Replace with API call
const layers: LayerItemProps[] = [
  { id: 1, sort: 1, name: "Ríos" },
  { id: 2, sort: 2, name: "Lagos" },
  { id: 3, sort: 3, name: "Capitales" },
  { id: 4, sort: 4, name: "Estados" },
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
        <DndContext onDragEnd={handleDragEnd}>
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
