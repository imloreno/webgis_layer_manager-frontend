import { Icons } from "@atoms";

interface LayerItemProps {
  sort: number;
  name: string;
}

const LayerItem = ({ sort, name }: LayerItemProps) => {
  return (
    <li className="p-3 rounded border border-[#6b6f7f] cursor-pointer select-none divide-x divide-[#383838]">
      <Icons type="draggable" className="mr-3" />
      <span className="pl-3">
        {sort} - {name}
      </span>
    </li>
  );
};

export default LayerItem;
