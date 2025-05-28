import { useEffect, useState } from "react";

function ScrollY() {
 const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const width = window.innerWidth;

  return (
    <div className="fixed bottom-4 left-4 bg-black border-1 border-white text-white text-sm px-3 py-1 rounded shadow-lg z-50">
      ScrollY: {Math.round(scrollY)}px
      <p>Width = {width}</p> 
    </div>
  );
}

export default ScrollY