import React, { useEffect, useRef } from "react";

const StarBackground = ({ starCount = 100 }) => {
  const starContainerRef = useRef(null);

  useEffect(() => {
    const container = starContainerRef.current;

    if (container) {
      // Remove estrelas existentes ao recriar
      container.innerHTML = "";

      // Criar estrelas dinamicamente
      for (let i = 0; i < starCount; i++) {
        const star = document.createElement("div");
        star.textContent = "★";
        star.style.position = "absolute";
        star.style.color = "rgba(255, 255, 255, 0.7)";
        star.style.fontSize = `${Math.random() * 24 + 12}px`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.transform = `rotate(${Math.random() * 360}deg)`;
        star.style.opacity = Math.random();
        container.appendChild(star);
      }
    }
  }, [starCount]);

  return (
    <div
      ref={starContainerRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        pointerEvents: "none",
      }}
    />
  );
};

export default StarBackground;
