import { LABELS } from "@utils/constants";
import { Feature } from "geojson";
import { isEmpty } from "lodash";

interface SublayerItemProps {
  feature: Feature;
}

const SublayerItemProperty = ({
  title,
  value,
}: {
  title: string;
  value: string;
}) => (
  <p>
    <b className="text-tertiary">{LABELS[title] || title}:</b> {value}
  </p>
);

const SublayerItem = ({
  feature: {
    properties,
    geometry: { type },
  },
}: SublayerItemProps) => {
  return (
    <li
      className="py-2 px-4 rounded border border-[#6b6f7f]
      cursor-pointer select-none text-sm font-normal 
      bg-[#1D1D26] columns-2 border-l-4 border-l-label"
    >
      {!isEmpty(properties) &&
        Object.keys(properties).map((key) => {
          return (
            <SublayerItemProperty
              key={key}
              title={key}
              value={properties[key]}
            />
          );
        })}
      <SublayerItemProperty title="Feature" value={type || "No especificado"} />
    </li>
  );
};

export default SublayerItem;
