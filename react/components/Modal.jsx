import React from "react";

export const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="modal-close" onClick={onClose}>
          X
        </button>
        <div>
          <h1>Aqui vai o conteudo</h1>
        </div>
      </div>
    </div>
  );
};
