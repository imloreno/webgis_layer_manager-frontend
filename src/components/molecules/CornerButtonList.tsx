import { ButtonIcon } from "@atoms";
import useSettings from "@store/useSettings";
import { Theme } from "@utils/theme";

interface CornerButtonProps {
  isFullscreen: boolean;
  toggleFullScreen: () => void;
}

const CornerButtonList = ({
  isFullscreen,
  toggleFullScreen,
}: CornerButtonProps) => {
  const { themeSelected, setTheme } = useSettings();

  // Handlers
  const handleThemeChange = () => {
    if (themeSelected === "light") {
      setTheme(Theme.dark);
    } else {
      setTheme(Theme.light);
    }
  };

  return (
    <div
      className="flex flex-col fixed bottom-4 left-4 z-[9999] 
      gap-y-2 text-backgroundSecondary text-lg"
    >
      <ButtonIcon icon={themeSelected} onClick={handleThemeChange} />
      <ButtonIcon
        icon={isFullscreen ? "compress" : "expand"}
        onClick={toggleFullScreen}
      />
    </div>
  );
};

export default CornerButtonList;
