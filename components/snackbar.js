import React, { useState, useEffect } from "react";

export default function Snackbar({ message, success, setStatus }) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const openSnackBar = () => {
      setIsActive(true);
      const timer = setTimeout(() => {
        setIsActive(false);
        setStatus({ success: "true", statusMessage: "" })
      }, 3000);
      return () => clearTimeout(timer)
    };
    if (message.length) {
      openSnackBar();
    }
  }, [message]);

  return (
    <div className={(isActive ? "snackbar show " : "snackbar ") + (success ? "green" : "fail-red")}>{message}</div>
  );
}
