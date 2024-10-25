import { faHome, faXmark, IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const iconList: { [key: string]: IconDefinition } = {
   home: faHome,
   close: faXmark,
}

const Icons = ({ type, className = "" }: { type: string, className?: string }) => {
   return (
      <FontAwesomeIcon className={`${className}`} icon={iconList[type] ?? iconList.home} />
   )
}

export default Icons