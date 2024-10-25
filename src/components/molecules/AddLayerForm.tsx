import { useForm, SubmitHandler } from "react-hook-form";
import Input from "@atoms/Input";
import Button from "@atoms/Button";
import InputFile from "@components/atoms/InputFile";
import { IGeoJSONBase } from "@models/form";
import Dialog from "@layouts/Dialog";


const AddLayerForm = () => {
   const { register, handleSubmit } = useForm<IGeoJSONBase, undefined>({
      defaultValues: {
         layer_file: "",
         sorting: 1,
         coordinate_system: "",
         layer_name: ""
      }
   });

   const onSubmit: SubmitHandler<IGeoJSONBase> = (data) => console.log(data);

   return (
      <Dialog isOpen={false}>
         <div className="form">
            <h3 className="text-xl font-bold mb-6">Agregar una nueva capa</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-4" encType="multipart/form-data">
               <Input label="Ingrese el nombre de la capa" register={register} layerName="layer_name" type="text" />
               <Input label="Ingrese la posición" register={register} layerName="sorting" type="number" />
               <InputFile
                  label="Seleccionar archivo GeoJSON"
                  layerName="layer_file"
                  register={register}
               />
               <Button label="Agregar capa" />
            </form>
         </div>
      </Dialog>
   )
}

export default AddLayerForm