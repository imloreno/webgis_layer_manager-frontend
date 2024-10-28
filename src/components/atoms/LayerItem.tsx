import { CSS } from "@dnd-kit/utilities";
import { Icons } from "@atoms";
import { useSortable } from "@dnd-kit/sortable";
import { ILayer } from "@models/layers";

const LayerItem = ({ id, sorting, name, isVisible }: ILayer) => {
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
      className="py-2 px-4 rounded border border-[#6b6f7f]
      cursor-pointer select-none flex items-center 
      gap-x-3 divide-x divide-[#383838] text-lg
      font-normal bg-[#1D1D26]"
    >
      <Icons type="draggable" className="text-[#F29D52]" />
      <span className="pl-3 text-base">
        {sorting} - {name}
      </span>
      <div className="w-4 h-4 ml-auto border-none flex items-center justify-center">
        <Icons
          type={`${isVisible ? "visible" : "hidden"}`}
          className="text-[#F29D52]"
        />
      </div>
    </li>
  );
};

export default LayerItem;
