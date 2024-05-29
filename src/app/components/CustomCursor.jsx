"use client";
import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseover", onMouseOver);
      document.addEventListener("mouseout", onMouseOut);
    };

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
    };

    const onMouseMove = (event) => {
      const { clientX: x, clientY: y } = event;
      setPosition({ x, y });
    };

    const onMouseOver = (event) => {
      if (event.target.closest('.hero-title')) {
        setIsHovering(true);
      }
    };

    const onMouseOut = (event) => {
      if (event.target.closest('.hero-title')) {
        setIsHovering(false);
      }
    };

    addEventListeners();
    return () => removeEventListeners();
  }, []);

  return (
    <div
      className={`fixed top-0 left-0  h-10 rounded-full pointer-events-none z-50 transition-transform duration-100 ${isHovering ? 'bg-pink-200 w-20 h-20 ' : 'w-10 bg-transparent border-2 border-pink-500'}`}
      style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)`, mixBlendMode: isHovering ? 'difference' : 'normal' }}
    />
  );
};

export default CustomCursor;
