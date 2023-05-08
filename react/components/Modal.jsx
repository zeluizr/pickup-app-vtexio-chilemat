import React from "react";
import { useCssHandles } from "vtex.css-handles";

import "../styles/Modal.css";

const CSS_HANDLES = ["modalOverlay", "modal", "modalClose", "modalContent"];

export const Modal = ({ isOpen, onClose }) => {
  const handles = useCssHandles(CSS_HANDLES);
  if (!isOpen) return null;

  return (
    <div className={`${handles.modalOverlay}`}>
      <div className={`${handles.modal}`}>
        <button className={`${handles.modalClose}`} onClick={onClose}>
          X
        </button>
        <div className={`${handles.modalContent}`}>
          <h1>Aqui vai o conteudo</h1>
        </div>
      </div>
    </div>
  );
};
