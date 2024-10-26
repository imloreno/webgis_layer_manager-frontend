import { CSS } from "@dnd-kit/utilities";
import { Icons } from "@atoms";
import { useSortable } from "@dnd-kit/sortable";

export interface LayerItemProps {
  id: number;
  sort: number;
  name: string;
  isVisible: boolean;
}

const LayerItem = ({ id, sort, name, isVisible }: LayerItemProps) => {
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
      className="p-3 rounded border border-[#6b6f7f] 
      cursor-pointer select-none flex items-center 
      gap-x-3 divide-x divide-[#383838]"
    >
      <Icons type="draggable" />
      <span className="pl-3">
        {sort} - {name}
      </span>
      <div className="w-6 h-6 ml-auto border-none flex items-center justify-center">
        <Icons type={`${isVisible ? "visible" : "hidden"}`} />
      </div>
    </li>
  );
};

export default LayerItem;
