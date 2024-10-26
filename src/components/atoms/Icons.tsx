import {
  faGripVertical,
  faHome,
  faXmark,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Customizable } from "@models/base";

interface IconsProps extends Customizable {
  type: string;
}

const iconList: { [key: string]: IconDefinition } = {
  home: faHome,
  close: faXmark,
  draggable: faGripVertical,
};

const Icons = ({ type, className = "" }: IconsProps) => {
  return (
    <FontAwesomeIcon
      className={`${className}`}
      icon={iconList[type] ?? iconList.home}
    />
  );
};

export default Icons;
