import { useEffect, useMemo, useRef, useState } from "react";
import { ToastContext } from "./toast-context";
import "./toast.css";

const useTimeout = (callback: any) => {
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const id = setTimeout(() => savedCallback.current(), 3000);

    return () => clearTimeout(id);
  }, []);
};

type ToastProperties = {
  id: number;
  message: string;
  close: () => void;
};

export function Toast({ message, close }: ToastProperties) {
  useTimeout(() => {
    close();
  });
  return (
    <div className="toast">
      <p>{message}</p>
      <button className="close-button" onClick={close}>
        {"\u274C"}
      </button>
    </div>
  );
}

export function ToastsProvider({ children }: { children: any }) {
  const [toasts, setToasts] = useState<{ message: string; id: number }[]>([]);

  function open(message: string) {
    const newToast = {
      id: Date.now(),
      message,
    };

    setToasts((prevToasts) => [...prevToasts, newToast]);
  }

  function close(id: number) {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  }

  const contextValue = useMemo(() => ({ open, close }), []);

  return (
    <>
      <ToastContext.Provider value={contextValue}>
        {children}
        <div className="toasts">
          {toasts &&
            toasts.map((toast) => {
              return (
                <Toast
                  key={toast.id}
                  message={toast.message}
                  id={toast.id}
                  close={() => close(toast.id)}
                />
              );
            })}
        </div>
      </ToastContext.Provider>
    </>
  );
}
