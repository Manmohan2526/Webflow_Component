import React from "react";
import ReactDOM from "react-dom/client";
import ProgressBar from "./ProgressBar.jsx";

// Webflow init
window.Webflow ||= [];
window.Webflow.push(() => {
  const elements = document.querySelectorAll("[data-react='progressbar']");

  elements.forEach((el) => {
    const value = el.getAttribute("data-value");
    const color = el.getAttribute("data-color");
    const type = el.getAttribute("data-type");
    const showLabel = el.getAttribute("data-label") === "true";

    const root = ReactDOM.createRoot(el);
    root.render(
      <ProgressBar
        type={type || "normal"}
        value={value ? Number(value) : 50}
        color={color || "#4caf50"}
        showLabel={showLabel}
      />
    );
  });
});
