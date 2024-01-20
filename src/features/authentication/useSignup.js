import { useMutation } from "@tanstack/react-query";
import { signup } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signupFn, isLoading } = useMutation({
    mutationFn: signup,
    onSuccess: (user) => {
      console.log(user);
      toast.success(
        "account is successfully created please confirm account by email verify"
      );
    },
  });

  return { signupFn, isLoading };
}
