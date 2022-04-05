import React from "react";
import ReactDOM from "react-dom";
import "./model.css";

export default function Module({ children, handleClose }) {
  return ReactDOM.createPortal(
    <div className="module-backdrop">
      <div className="module">
        {children}
        <button onClick={handleClose}>close</button>
      </div>
    </div>,
    document.body
  );
}
