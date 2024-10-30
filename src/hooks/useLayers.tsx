import { useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import useLayersStore from "@store/useLayersStore";
import { createLayer, fetchLayers } from "@api/layers";
import { ILayer } from "@models/layers";

// API response interface
interface APIResponse {
  id: string;
  coordinate_system: string;
  layer_name: string;
  original_file: string;
  sorting: number;
}

const useLayers = () => {
  const setLayers = useLayersStore((state) => state.setLayers);
  const queryClient = useQueryClient();
  const {
    data: { data: response } = {},
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchLayers,
  });

  // Uploading layers API call
  // TODO: Fix "posts" key
  const mutationLayers = useMutation({
    mutationFn: createLayer,
    onSuccess: () => {
      queryClient.invalidateQueries("posts");
    },
  });

  // Use useEffect to update Zustand store when data is fetched
  useEffect(() => {
    if (response) {
      // Convert API response to ILayer
      setLayers(
        response.map(
          (layer: APIResponse): ILayer => ({
            id: layer.id,
            sorting: layer.sorting,
            name: layer.layer_name,
            originalFile: layer.original_file,
            coordinateSystem: layer.coordinate_system,
            isVisible: true,
          })
        )
      );
    }
  }, [response, setLayers]);

  return {
    data: response,
    isLoading,
    isError,
  };
};

export default useLayers;
