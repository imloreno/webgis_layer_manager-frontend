import { useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import useLayersStore from "@store/useLayersStore";
import { createLayer, fetchLayers } from "@api/layers";
import { ILayer } from "@models/layers";
import { CREATE_LAYER, FETCH_LAYERS } from "@hooks";

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

  // Fetching layers API call
  const queryClient = useQueryClient();
  const {
    data: { data: response } = {},
    isLoading,
    isError,
  } = useQuery({
    queryKey: [FETCH_LAYERS],
    queryFn: fetchLayers,
  });

  // Create layer API call
  const { mutate: addLayer, isPending: isAddingLayer } = useMutation({
    mutationKey: [CREATE_LAYER],
    mutationFn: createLayer,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [FETCH_LAYERS],
        exact: true,
        refetchType: "active",
      });
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
    // Fetch layers
    data: response,
    isLoading,
    isError,

    // Create layer
    addLayer,
    isAddingLayer,
  };
};

export default useLayers;
