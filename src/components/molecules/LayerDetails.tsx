import { Subtitle } from "@atoms";

const LayerDetails = () => {
  return (
    <section>
      <Subtitle className="px-6 py-4">Detalles</Subtitle>
      <div className=""></div>
      <div className="aspect-video bg-[#1D1D26] overflow-hidden">
        <img
          src="no_image.png"
          alt="No imge"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default LayerDetails;
