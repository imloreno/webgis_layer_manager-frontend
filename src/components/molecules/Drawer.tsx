/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect, useRef, useState } from "react";
import L, { FeatureGroup as FeatureGroupType, Layer } from "leaflet";
import { FeatureGroup } from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import useLeafletDrawingStore from "@store/useLeafletDrawingStore";

const Drawer = () => {
  const { addLayer, setAllLayers, layerFeatures, isDrawing } =
    useLeafletDrawingStore((state) => state);
  const [, forceUpdate] = useState({});

  // Here, we'll hold the drawn items
  const drawnItems = useRef<FeatureGroupType>(new L.FeatureGroup());

  // -------------------- Handlers --------------------
  // Handle the creation of new layers
  const handleCreated = (e: { layer: Layer }) => {
    const { layer } = e;
    // Add the created layer to the FeatureGroup and update state
    drawnItems.current.addLayer(layer);
    addLayer(layer);
  };
  // Handle the editing of layers
  const handleEdited = (e: { layers: FeatureGroupType }) => {
    const { layers: editedLayers } = e;

    editedLayers.eachLayer((layer: Layer) => {
      // Update the state with the new layer geometry after editing
      setAllLayers(
        layerFeatures.map((prevLayer) => {
          // @ts-expect-error
          if (prevLayer._leaflet_id === layer._leaflet_id) {
            return layer; // Replace the old layer with the edited one
          }
          return prevLayer;
        })
      );
    });
  };
  // Handle the deletion of layers
  const handleDeleted = (e: { layers: FeatureGroupType }) => {
    const { layers: deletedLayers } = e;

    deletedLayers.eachLayer((layer: Layer) => {
      // Remove the deleted layer from the state
      setAllLayers(
        layerFeatures.filter(
          // @ts-expect-error
          (prevLayer) => prevLayer._leaflet_id !== layer._leaflet_id
        )
      );
    });
  };

  // --------------------- Side effects ---------------------
  // Trigger the resetDrawing action when the component is unmounted
  useEffect(() => {
    if (!isDrawing) {
      console.log("Drawer mode closed");
      // Clear all the layers from the map
      drawnItems.current.clearLayers();
      // Clear all the layers from the map
      drawnItems.current.getLayers().forEach((layer) => {
        drawnItems.current.removeLayer(layer);
      });
      forceUpdate({});
    }
  }, [isDrawing]);

  return (
    <FeatureGroup>
      <EditControl
        position="topright"
        onCreated={handleCreated}
        onEdited={handleEdited}
        onDeleted={handleDeleted}
        draw={{
          rectangle: false,
          circle: false,
          polyline: true,
          polygon: true,
          marker: true,
          circlemarker: false,
        }}
      />
    </FeatureGroup>
  );
};

export default Drawer;
