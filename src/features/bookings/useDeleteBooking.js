import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteBooking } from "../../services/apiBookings";

export function useDeleteBooking() {
  const queruClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteBook } = useMutation({
    mutationFn: deleteBooking,
    onSuccess: () => {
      toast.success("success delete");
      queruClient.invalidateQueries({
        queryKey: ["bookings"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteBook };
}
