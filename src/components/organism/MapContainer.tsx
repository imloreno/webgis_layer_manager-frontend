import { useEffect, useRef, useState } from "react";
import { MapContainer as Map, TileLayer } from "react-leaflet";
import { position } from "@utils/constants";
import { getTheme } from "@utils/theme";
import useSettings from "@store/useSettings";
import { FeatureList, CornerButtonList, Drawer } from "@molecules";

const MapContainer = () => {
  const { themeSelected } = useSettings();
  const mapTheme = getTheme(themeSelected);
  // Fullscreen variables
  const [isFullscreen, setFullscreen] = useState(false);
  const fullScreenElement = useRef(null);

  // Handlers
  const toggleFullScreen = () => {
    const divElement: any = fullScreenElement?.current;

    // Check if the divElement is fullscreen and switch to the opposite
    if (divElement.requestFullscreen && !isFullscreen) {
      divElement.requestFullscreen(); // For Chrome & Firefox
      setFullscreen(true);
    } else if (divElement.webkitRequestFullscreen && !isFullscreen) {
      divElement.webkitRequestFullscreen(); // For Safari
      setFullscreen(true);
    } else if (document.exitFullscreen && isFullscreen) {
      document.exitFullscreen(); // For Chrome & Firefox
      setFullscreen(false);
    } else if (divElement.webkitExitFullscreen && isFullscreen) {
      divElement.webkitExitFullscreen(); // For Safari
      setFullscreen(false);
    }
  };

  useEffect(() => {
    const divElement: any = fullScreenElement?.current;
    if (!divElement) return;

    const fullScreenListener = divElement.addEventListener(
      "fullscreenchange",
      () => {
        if (document.fullscreenElement) {
          setFullscreen(true);
        } else {
          setFullscreen(false);
        }
      }
    );

    return () =>
      divElement.removeEventListener("fullscreenchange", fullScreenListener);
  }, []);

  return (
    <div className="w-full" ref={fullScreenElement}>
      <Map
        center={position}
        zoom={7}
        scrollWheelZoom={true}
        style={{ height: "100vh" }}
        preferCanvas={true}
        attributionControl={false}
      >
        <FeatureList />
        <TileLayer {...mapTheme.mapProps} />
        <CornerButtonList
          isFullscreen={isFullscreen}
          toggleFullScreen={toggleFullScreen}
        />
        <Drawer />
      </Map>
    </div>
  );
};

export default MapContainer;
