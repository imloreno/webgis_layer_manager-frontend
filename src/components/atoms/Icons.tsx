import {
  faCompress,
  faEllipsisVertical,
  faExpand,
  faEye,
  faEyeSlash,
  faGripVertical,
  faHome,
  faMoon,
  faPlus,
  faSun,
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
  visible: faEye,
  hidden: faEyeSlash,
  options: faEllipsisVertical,
  expand: faExpand,
  compress: faCompress,
  add: faPlus,
  dark: faMoon,
  light: faSun,
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
