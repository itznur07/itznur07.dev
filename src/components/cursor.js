import { useCallback, useEffect, useState } from "react";

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((event) => {
    const { clientX, clientY } = event;
    setPosition({ x: clientX, y: clientY });
  }, []);

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseMove]);

  return (
    <div
    
      className='w-5 h-5 absolute border-2 border-yellow-500  rounded-full z-10 pointer-events-none transition ease-linear duration-200 delay-150 '
      style={{ left: position.x, top: position.y }}
    >
      <div
        className='w-2 h-2  bg-yellow-500 rounded-full z-10 pointer-events-none'
        style={{ left: position.x, top: position.y }}
      ></div>
    </div>
  );
}

export default CustomCursor;
