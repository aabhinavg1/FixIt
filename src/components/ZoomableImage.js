import React, { useState, useRef, useEffect } from "react";

export default function ZoomableImage({ src, alt }) {
  const [scale, setScale] = useState(1);
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  // Mouse drag handlers
  const handleMouseDown = (e) => {
    if (e.button !== 0) return; // only left click
    e.preventDefault();
    setIsDragging(true);
    setStartPos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    // drag to pan
    const dx = (e.clientX - startPos.x) / scale;
    const dy = (e.clientY - startPos.y) / scale;
    setTranslate((t) => ({ x: t.x + dx, y: t.y + dy }));
    setStartPos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = () => setIsDragging(false);

  // Touch drag handlers
  const handleTouchStart = (e) => {
    if (e.touches.length === 1) {
      const touch = e.touches[0];
      setIsDragging(true);
      setStartPos({ x: touch.clientX, y: touch.clientY });
    }
  };

  const handleTouchMove = (e) => {
    if (!isDragging || e.touches.length !== 1) return;
    const touch = e.touches[0];
    const dx = (touch.clientX - startPos.x) / scale;
    const dy = (touch.clientY - startPos.y) / scale;
    setTranslate((t) => ({ x: t.x + dx, y: t.y + dy }));
    setStartPos({ x: touch.clientX, y: touch.clientY });
  };

  const handleTouchEnd = () => setIsDragging(false);

  // Fit image to container initially
  const handleImageLoad = (e) => {
    const img = e.target;
    const container = containerRef.current;
    if (!container) return;

    const scaleX = container.clientWidth / img.naturalWidth;
    const scaleY = container.clientHeight / img.naturalHeight;
    const initialScale = Math.min(scaleX, scaleY);

    setScale(initialScale);
    setTranslate({ x: 0, y: 0 });
  };

  // Wheel for zoom + pan
  const handleWheel = (e) => {
    e.preventDefault();

    if (e.ctrlKey) {
      // Zoom with Ctrl + wheel
      const delta = e.deltaY > 0 ? -0.1 : 0.1;
      setScale((s) => Math.min(3, Math.max(0.1, s + delta)));
    } else if (e.shiftKey) {
      // Pan left/right with Shift + wheel
      setTranslate((t) => ({ ...t, x: t.x - e.deltaY / scale }));
    } else {
      // Pan up/down with normal wheel
      setTranslate((t) => ({ ...t, y: t.y - e.deltaY / scale }));
    }
  };

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e) => {
      const step = 20 / scale; // move less when zoomed in
      if (e.key === "ArrowUp") {
        setTranslate((t) => ({ ...t, y: t.y + step }));
      } else if (e.key === "ArrowDown") {
        setTranslate((t) => ({ ...t, y: t.y - step }));
      } else if (e.key === "ArrowLeft") {
        setTranslate((t) => ({ ...t, x: t.x + step }));
      } else if (e.key === "ArrowRight") {
        setTranslate((t) => ({ ...t, x: t.x - step }));
      } else if (e.key === "+" || e.key === "=") {
        setScale((s) => Math.min(3, s + 0.1));
      } else if (e.key === "-" || e.key === "_") {
        setScale((s) => Math.max(0.1, s - 0.1));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [scale]);

  // Slider handlers
  const handleZoomChange = (e) => setScale(parseFloat(e.target.value));
  const handleXChange = (e) =>
    setTranslate((t) => ({ ...t, x: parseInt(e.target.value) }));
  const handleYChange = (e) =>
    setTranslate((t) => ({ ...t, y: parseInt(e.target.value) }));

  return (
    <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
      <div
        ref={containerRef}
        className="zoom-container"
        style={{
          overflow: "hidden",
          border: "1px solid #ccc",
          width: "100%",
          height: "500px",
          cursor: isDragging ? "grabbing" : "grab",
          position: "relative",
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onWheel={handleWheel}
      >
        <img
          src={src}
          alt={alt}
          onLoad={handleImageLoad}
          style={{
            maxWidth: "none",
            maxHeight: "none",
            transformOrigin: "top left",
            transition: isDragging ? "none" : "transform 0.1s ease",
            transform: `translate(${translate.x}px, ${translate.y}px) scale(${scale})`,
          }}
        />
      </div>

      {/* Controls */}
      <div style={{ marginTop: "10px" }}>
        <label>
          Zoom:
          <input
            type="range"
            min={0.1}
            max={3}
            step={0.1}
            value={scale}
            onChange={handleZoomChange}
            style={{ width: "80%" }}
          />
        </label>
      </div>
      <div style={{ marginTop: "10px" }}>
        <label>
          Pan X:
          <input
            type="range"
            min={-500}
            max={500}
            value={translate.x}
            onChange={handleXChange}
            style={{ width: "80%" }}
          />
        </label>
      </div>
      <div style={{ marginTop: "10px" }}>
        <label>
          Pan Y:
          <input
            type="range"
            min={-500}
            max={500}
            value={translate.y}
            onChange={handleYChange}
            style={{ width: "80%" }}
          />
        </label>
      </div>
    </div>
  );
}
