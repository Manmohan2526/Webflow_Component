import React from "react";

const ProgressBar = ({
  type = "normal",
  value = 50,
  color = "#4caf50",
  height = "8px",
  showLabel = false,
  backgroundColor = "#eee",
  borderRadius = "8px",
  style = {},
}) => {
  const [scrollValue, setScrollValue] = React.useState(0);

  React.useEffect(() => {
    if (type !== "scroll") return;

    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (window.scrollY / total) * 100;
      setScrollValue(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [type]);

  const progress = type === "scroll" ? scrollValue : value;

  return (
    <div
      style={{
        width: "100%",
        backgroundColor,
        borderRadius,
        height,
        overflow: "hidden",
        position: type === "scroll" ? "fixed" : "relative",
        top: type === "scroll" ? 0 : "auto",
        left: 0,
        zIndex: type === "scroll" ? 9999 : "auto",
        ...style,
      }}
    >
      <div
        style={{
          width: `${progress}%`,
          backgroundColor: color,
          height: "100%",
          borderRadius,
          display: "flex",
          alignItems: "center",
          justifyContent: showLabel ? "center" : "flex-start",
          color: "#fff",
          fontSize: "12px",
          fontWeight: "bold",
        }}
      >
        {showLabel && `${Math.round(progress)}%`}
      </div>
    </div>
  );
};

export default ProgressBar;
