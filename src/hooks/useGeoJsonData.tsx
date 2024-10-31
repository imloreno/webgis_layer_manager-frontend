import { useQueries } from "@tanstack/react-query";
import { fetchGeoJson } from "@api/layers";

// Deafult hook to fetch geojson data
const useGeoJsonData = (idList: string[]) => {
  return useQueries({
    queries: idList.map((layerId) => ({
      queryKey: ["fetchGeoJsonData", layerId],
      queryFn: () => fetchGeoJson(layerId),
      enabled: Boolean(layerId), // Only run if id is valid
    })),
    combine: (data) => {
      return {
        data: data.map((d) => d.data),
        isLoading: data.some((d) => d.isLoading),
        isSuccess: data.every((d) => d.isSuccess),
        error: data.some((d) => d.error),
      };
    },
  });
};

export default useGeoJsonData;
