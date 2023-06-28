import { toast } from "react-toastify";

//toaster to show sucess message
export const ToastSucess = (msg) => {
  return toast.success(msg, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};

//toaster to show Error message
export const ToastError = () => {
  return toast.error(`${msg} !`, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};

//toaster to show warning message
export const ToastWarning = () => {
  return toast.warn(`${msg} !`, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};
