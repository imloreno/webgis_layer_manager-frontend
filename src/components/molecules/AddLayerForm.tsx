import { useForm, SubmitHandler } from "react-hook-form";
import { Input, Button, InputFile, Subtitle } from "@atoms";
import { IGeoJSONBase, TInputType, TLayerName } from "@models/form";
import { Dialog } from "@templates";
import { useLayers } from "@hooks";

interface IAddLayerFormProps {
  isOpen: boolean;
  onClose: () => void;
}

// Form definition
const formFields = [
  {
    label: "Ingrese el nombre de la capa",
    registerProps: {
      required: true,
      errorMessage: "El nombre de la capa es requerido",
    },
    name: "layer_name",
    type: "text",
  },
  {
    label: "Ingrese la posición",
    registerProps: {
      required: true,
      errorMessage: "La posición es requerida",
    },
    name: "sorting",
    type: "number",
  },
  {
    label: "Seleccionar archivo GeoJSON",
    registerProps: {
      required: true,
      errorMessage: "El archivo GeoJSON es requerido",
    },
    name: "layer_file",
    type: "file",
    accept: ".geojson",
  },
];

const formInitialState: IGeoJSONBase = {
  layer_file: "",
  sorting: 1,
  layer_name: "",
};

const AddLayerForm = ({ isOpen, onClose }: IAddLayerFormProps) => {
  const { register, handleSubmit, reset } = useForm<IGeoJSONBase, undefined>({
    mode: "all",
    defaultValues: formInitialState,
  });
  const { isAddingLayer, addLayer } = useLayers();

  const onSubmit: SubmitHandler<IGeoJSONBase> = (data) => {
    // Create a FormData object
    const formData = new FormData();
    formData.append("layer_file", data.layer_file[0]);
    formData.append("sorting", data.sorting.toString());
    formData.append("layer_name", data.layer_name);
    addLayer(formData);
    reset(formInitialState);
    onClose();
  };

  return (
    <Dialog isOpen={isOpen} onClose={onClose}>
      <div className="form">
        <Subtitle className="mb-8">Agregar una nueva capa</Subtitle>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-y-4"
          encType="multipart/form-data"
        >
          {formFields.map(({ type, name, label, registerProps }) => {
            if (type === "file") {
              return (
                <InputFile
                  key={name}
                  label={label}
                  name={name as TLayerName}
                  register={register(name as TLayerName, registerProps)}
                  disabled={isAddingLayer}
                />
              );
            }
            return (
              <Input
                key={name}
                label={label}
                name={name as TLayerName}
                register={register(name as TLayerName, registerProps)}
                type={type as TInputType}
              />
            );
          })}
          <Button disabled={false} type="submit">
            AGREGAR
          </Button>
        </form>
      </div>
    </Dialog>
  );
};

export default AddLayerForm;
