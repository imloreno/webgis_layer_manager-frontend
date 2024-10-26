import { LayerItem, Subtitle } from "@atoms";

const LayerList = () => {
  return (
    <>
      <Subtitle className="pt-5 px-8">Capas</Subtitle>
      <hr />

      <ul className="flex flex-col gap-y-2 my-[2rem] px-8">
        <LayerItem sort={1} name="Ríos" />
        <LayerItem sort={2} name="Lagos" />
        <LayerItem sort={3} name="Capitales" />
        <LayerItem sort={4} name="Estados" />
      </ul>
    </>
  );
};

export default LayerList;
