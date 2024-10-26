import { CSS } from "@dnd-kit/utilities";
import { Icons } from "@atoms";
import { useSortable } from "@dnd-kit/sortable";

export interface LayerItemProps {
  id: number;
  sort: number;
  name: string;
}

const LayerItem = ({ id, sort, name }: LayerItemProps) => {
  // React DND Kit
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <li
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      className="p-3 rounded border border-[#6b6f7f] cursor-pointer select-none divide-x divide-[#383838]"
    >
      <Icons type="draggable" className="mr-3" />
      <span className="pl-3">
        {sort} - {name}
      </span>
    </li>
  );
};

export default LayerItem;
