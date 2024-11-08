import { GEOJSON_LABELS } from "@utils/constants";
import { Feature } from "geojson";
import { isEmpty } from "lodash";

interface SublayerItemProps {
  feature: Feature;
}

// SublayerItemProperty component
const SublayerItemProperty = ({
  title,
  value,
  variant,
}: {
  title: string;
  value: string;
  variant?: "special";
}) => (
  <p className={`${variant === "special" && "text-[#81B29A]"}`}>
    <b className="text-tertiary">{GEOJSON_LABELS[title] || title}:</b> {value}
  </p>
);

// Main component
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
      <SublayerItemProperty
        title="Feature"
        value={type || "No especificado"}
        variant="special"
      />
    </li>
  );
};

export default SublayerItem;
