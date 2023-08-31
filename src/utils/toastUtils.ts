import { toast } from "react-toastify";

export const toastProgress = (toastId, progress, message) => {
  if (toastId.current === null) {
    toastId.current = toast(message, { progress });
  } else {
    toast.update(toastId.current, { progress, render: message });
  }
};
