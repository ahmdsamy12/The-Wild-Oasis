import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useEditingCabin() {
  const queryClient = useQueryClient();

  const { mutate: editMutate, isLoading: isEditing } = useMutation({
    mutationFn: ({ newCabinEdit, id }) => createEditCabin(newCabinEdit, id),
    onSuccess: () => {
      toast.success(" cabin successfully edited");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { editMutate, isEditing };
}
