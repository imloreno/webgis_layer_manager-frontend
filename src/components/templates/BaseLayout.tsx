import { MapContainer, Menu } from "@organism";

const BaseLayout = () => {
  return (
    <div className="flex h-screen text-lg">
      <MapContainer />
      <div className="overflow-hidden overflow-y-auto scroll-styled w-[30rem]">
        <Menu />
      </div>
    </div>
  );
};

export default BaseLayout;
