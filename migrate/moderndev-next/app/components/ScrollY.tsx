"use client";

import { useEffect, useState } from "react";

function ScrollY() {
  const [scrollY, setScrollY] = useState(0);
  const [width, setWidth] = useState<number>(() =>
    typeof window !== "undefined" ? window.innerWidth : 0,
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // initialize values (in case component mounts after events)
    handleResize();
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="fixed bottom-4 left-16 bg-black border border-white text-white text-sm px-3 py-1 rounded shadow-lg z-50">
      ScrollY: {Math.round(scrollY)}px
      <p>Width = {width}</p>
    </div>
  );
}

export default ScrollY;
