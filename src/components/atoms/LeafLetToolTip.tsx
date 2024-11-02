import { LABELS } from "@utils/constants";
import { isEmpty } from "lodash";
import { Tooltip } from "react-leaflet";

interface ITooltipProperties {
  properties: { [key: string]: string };
}

const LeafLetToolTip = ({ properties }: ITooltipProperties) => {
  return (
    <Tooltip direction="top" className="bg-tertiary">
      <div className="">
        {!isEmpty(properties) &&
          Object.entries(properties).map(([key, value]) => (
            <p>
              <b>{LABELS[key]}: </b>
              {value}
            </p>
          ))}
      </div>
    </Tooltip>
  );
};

export default LeafLetToolTip;
