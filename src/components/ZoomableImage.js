import React, { useState, useRef } from "react";

export default function ZoomableImage({ src, alt }) {
  const [scale, setScale] = useState(1);
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  // Mouse drag handlers
  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    setStartPos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const dx = (e.clientX - startPos.x) / 2;
    const dy = (e.clientY - startPos.y) / 2;
    setTranslate({ x: dx, y: dy });
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
    const dx = (touch.clientX - startPos.x) / 2;
    const dy = (touch.clientY - startPos.y) / 2;
    setTranslate({ x: dx, y: dy });
  };

  const handleTouchEnd = () => setIsDragging(false);

  // Slider handlers
  const handleZoomChange = (e) => setScale(parseFloat(e.target.value));
  const handleXChange = (e) => setTranslate((t) => ({ ...t, x: parseInt(e.target.value) }));
  const handleYChange = (e) => setTranslate((t) => ({ ...t, y: parseInt(e.target.value) }));

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
          cursor: "grab",
          position: "relative",
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <img
          src={src}
          alt={alt}
          style={{
            width: "100%",
            height: "auto",
            transition: "transform 0.2s ease",
            transform: `scale(${scale}) translate(${translate.x}px, ${translate.y}px)`,
          }}
        />
      </div>

      {/* Controls */}
      <div style={{ marginTop: "10px" }}>
        <label>
          Zoom:
          <input
            type="range"
            min={1}
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
            min={-200}
            max={200}
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
            min={-200}
            max={200}
            value={translate.y}
            onChange={handleYChange}
            style={{ width: "80%" }}
          />
        </label>
      </div>
    </div>
  );
}
