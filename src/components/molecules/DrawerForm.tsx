import { Layer } from "leaflet";
import { FeatureCollection } from "geojson";
import { useForm } from "react-hook-form";
import { Button, Input, Subtitle } from "@atoms";
import { IGeoJSONBase } from "@models/form";
import useLeafletDrawingStore from "@store/useLeafletDrawingStore";
import { useLayers } from "@hooks";
import { jsonToFileConverter } from "@utils/jsonToFileConverter";

interface IFeatureCollection extends FeatureCollection {
  name: string;
  crs: {
    type: string;
    properties: {
      name: string;
    };
  };
}

const DrawerForm = () => {
  const { layerFeatures, resetDrawing } = useLeafletDrawingStore(
    (state) => state
  );
  const { addLayer } = useLayers();

  const { register, handleSubmit, reset, watch } = useForm<
    IGeoJSONBase,
    undefined
  >({
    mode: "all",
    defaultValues: {
      layer_file: "",
      sorting: 3,
      layer_name: "",
    },
  });

  // -------------------- Handlers --------------------
  const onSubmit = (data: IGeoJSONBase) => {
    const featureCollection: IFeatureCollection = {
      name: watch("layer_name"),
      crs: {
        type: "name",
        properties: {
          name: "urn:ogc:def:crs:OGC:1.3:CRS84",
        },
      },
      type: "FeatureCollection",
      features: [],
    };

    layerFeatures.forEach((layer: Layer) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      featureCollection.features.push(layer.toGeoJSON() as Feature);
    });
    console.log(featureCollection);

    // Create a FormData object
    const formData = new FormData();
    const jsonFile: File | undefined = jsonToFileConverter({
      jsonText: JSON.stringify(featureCollection),
      fileName: watch("layer_name"),
    });
    if (!jsonFile) return; // In case that the conversion fails
    formData.append("layer_file", jsonFile);
    formData.append("sorting", data.sorting.toString());
    formData.append("layer_name", data.layer_name);
    addLayer(formData);
    reset();
    resetDrawing();
  };

  return (
    <div className="p-6">
      <Subtitle className="mb-4 text-success">Agregar una nueva capa</Subtitle>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-y-4"
        encType="multipart/form-data"
      >
        <Input
          label="Ingrese el nombre de la capa"
          name="layer_name"
          register={register("layer_name", {
            required: true,
          })}
          type="text"
        />
        <div className="flex gap-x-4 mt-8">
          <Button
            disabled={false}
            type="submit"
            icon="sheet"
            className="w-fit mt-4"
          >
            Agregar capa
          </Button>
          <Button
            disabled={false}
            type="button"
            icon="sheet"
            className="w-fit mt-4"
            variant="danger"
            onClick={() => {
              window.location.reload();
            }}
          >
            Cancelar
          </Button>
        </div>
      </form>
    </div>
  );
};

export default DrawerForm;
