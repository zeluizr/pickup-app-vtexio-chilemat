import React, { useState } from "react";
import { useCssHandles } from "vtex.css-handles";
import { REGIONES } from "../utils/regiones.js";
import { COMUNAS } from "../utils/comunas.js";

import "../styles/Modal.css";

const CSS_HANDLES = [
  "modalOverlay",
  "modal",
  "modalClose",
  "modalContent",
  "modalTitle",
  "modalContext",
  "modalSelect",
  "modalButton",
];

export const Modal = ({ isOpen, onClose }) => {
  const [regiones, setRegiones] = useState(REGIONES);
  const [comunas, setComunas] = useState([]);
  const [comuna, setComuna] = useState("");
  const [disableComunas, setDisableComunas] = useState(true);
  const [disableButton, setDisableButton] = useState(true);

  const handles = useCssHandles(CSS_HANDLES);
  if (!isOpen) return null;

  const selectDelivery = () => {
    if (comuna === "") {
      return;
    }
    setComunas([]);
    console.log("Codigo Postal:", comuna);
    onClose();
  };

  const selectRegion = (event) => {
    if (event.target.value === "") {
      setRegiones([]);
      setComunas([]);
      setDisableButton(true);
      setComuna("");
      setDisableComunas(true);
      return;
    }

    setRegiones(REGIONES);

    const regionId = event.target.value;
    setDisableComunas(false);
    setComunas(COMUNAS[regionId]);

    const comunaElement = document.getElementsByName("comuna")[0];
    comunaElement.value = 0;
    setDisableButton(false);
  };

  return (
    <div className={`${handles.modalOverlay}`}>
      <div className={`${handles.modal}`}>
        <button className={`${handles.modalClose}`} onClick={onClose}>
          X
        </button>
        <div className={`${handles.modalContent}`}>
          <h3 className={`${handles.modalTitle}`}>
            Elige dónde recibir tus compras
          </h3>
          <p className={`${handles.modalContext}`}>
            Podrás ver costos y tiempos de entrega precisos en todo lo que
            busques.
          </p>
          <div className={`${handles.modalSelect}`}>
            <label htmlFor="region">Región</label>
            <select name="region" onChange={selectRegion} value="13">
              <option value="">Elija una opción</option>
              {regiones.map((region, index) => {
                return (
                  <option key={index} value={region.id}>
                    {region.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className={`${handles.modalSelect}`}>
            <label htmlFor="comuna">Comuna</label>
            <select
              name="comuna"
              disabled={disableComunas}
              onChange={(e) => setComuna(e.target.value)}
              defaultValue="9650000"
            >
              <option value="">Elija una opción</option>
              {comunas.map((comuna, index) => {
                return (
                  <option key={index} value={comuna.id}>
                    {comuna.name}
                  </option>
                );
              })}
            </select>
          </div>
          <button
            className={`${handles.modalButton}`}
            onClick={selectDelivery}
            disabled={disableButton}
          >
            Guardar mi ubicación
          </button>
        </div>
      </div>
    </div>
  );
};
