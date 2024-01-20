import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: logoutFn, isLoading } = useMutation({
    mutationFn: logout,

    onSuccess: () => {
      navigate("/login", { replace: true });
      queryClient.removeQueries();
    },

    onError: () => {
      toast.error("something happened while you logout try again");
    },
  });

  return { logoutFn, isLoading };
}
