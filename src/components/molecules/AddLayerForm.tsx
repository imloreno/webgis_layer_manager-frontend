import { useForm, SubmitHandler } from "react-hook-form";
import { Input, Button, InputFile, Subtitle } from "@atoms";
import { IGeoJSONBase, TInputType, TLayerName } from "@models/form";
import { Dialog } from "@templates";

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
      validate: (value: any) => {
        const acceptedFormats = ["geojson"];
        const fileExtension = value[0]?.name.split(".").pop().toLowerCase();
        if (!acceptedFormats.includes(fileExtension)) {
          return "Invalid file format. Only geojson files are allowed.";
        }
        return true;
      },
    },
    name: "layer_file",
    type: "file",
    accept: ".geojson",
  },
];

const AddLayerForm = ({ isOpen, onClose }: IAddLayerFormProps) => {
  const { register, handleSubmit } = useForm<IGeoJSONBase, undefined>({
    defaultValues: {
      layer_file: "",
      sorting: 1,
      coordinate_system: "",
      layer_name: "",
    },
  });

  const onSubmit: SubmitHandler<IGeoJSONBase> = (data) => {
    console.log(data);
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
            Agregar
          </Button>
        </form>
      </div>
    </Dialog>
  );
};

export default AddLayerForm;
