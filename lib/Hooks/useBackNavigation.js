"use client";
import { useEffect } from "react";

const useBackNavigation = (step, handleBack) => {
  useEffect(() => {
    const onBackButton = (e) => {
      e.preventDefault();

      if (step !== "method") {
        handleBack();
        window.history.pushState(null, "", window.location.pathname);
      }
    };

    window.history.pushState(null, "", window.location.pathname);
    window.addEventListener("popstate", onBackButton);

    return () => {
      window.removeEventListener("popstate", onBackButton);
    };
  }, [step, handleBack]);
};

export default useBackNavigation;
