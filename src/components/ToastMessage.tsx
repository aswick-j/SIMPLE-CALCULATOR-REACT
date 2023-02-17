import React, { useState, useEffect } from "react";
import "./ToastMessage.css";

interface IProps {
  message: string;
  time?: number | 1500;
}

export const ToastMessage: React.FC<IProps> = ({ message, time }) => {
  const [snackbar, setSnackBar] = useState<string>("show");
  useEffect(() => {
    setTimeout(() => {
      setSnackBar("");
    }, time);
  }, []);
  return (
    <div
      id="snackbar-container"
      className={`snackbar-parent ${snackbar ? snackbar : ""}`}
    >
      <div id="snackbar" className={`snackbar-content`}>
        {message}
      </div>
    </div>
  );
};
