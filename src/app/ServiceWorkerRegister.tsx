"use client";
import { useEffect } from "react";

export default function ServiceWorkerRegister() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      // délai pour laisser Next hydrater avant l’enregistrement
      const id = setTimeout(() => {
        navigator.serviceWorker
          .register("/sw.js")
          .catch((err) => console.error("SW registration failed:", err));
      }, 0);
      return () => clearTimeout(id);
    }
  }, []);
  return null;
}