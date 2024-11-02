import { FeatureGroup, Circle } from "react-leaflet";
import { EditControl } from "react-leaflet-draw";

const MapDrawing = () => (
  <FeatureGroup>
    <EditControl
      position="topleft"
      onEdited={() => {}}
      onCreated={() => {}}
      onDeleted={() => {}}
      draw={{
        rectangle: false,
      }}
    />
    <Circle center={[51.51, -0.06]} radius={200} />
  </FeatureGroup>
);

export default MapDrawing;
