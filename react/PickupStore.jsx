import { useState } from "react";
import { defineMessages } from "react-intl";
import { useCssHandles } from "vtex.css-handles";
import { Modal } from "./components/Modal";

import "./styles/PickupStore.css";

const CSS_HANDLES = ["container", "content", "icon", "text", "modal"];

const PickupStore = ({ isActive }) => {
  const handles = useCssHandles(CSS_HANDLES);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className={`${handles.container}`}>
        <button
          onClick={handleOpenModal}
          className={`${handles.content} link c-muted-1 flex items-center`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 19 20"
            className={`${handles.icon} mr3`}
          >
            <g>
              <path
                d="M9.40548 19.3551L8.85719 18.8852C8.10134 18.2523 1.50146 12.5524 1.50146 8.38305C1.50146 4.01779 5.04022 0.479034 9.40548 0.479034C13.7707 0.479034 17.3095 4.01779 17.3095 8.38305C17.3095 12.5524 10.7096 18.2523 9.9569 18.8883L9.40548 19.3551ZM9.40548 2.18811C5.98574 2.19198 3.21445 4.96327 3.21058 8.38301C3.21058 11.0023 7.27107 15.1865 9.40548 17.1016C11.5399 15.1857 15.6004 10.9991 15.6004 8.38301C15.5965 4.96327 12.8253 2.19202 9.40548 2.18811Z"
                fill="currentColor"
              />
              <path
                d="M9.40554 11.5159C7.67519 11.5159 6.27246 10.1131 6.27246 8.38278C6.27246 6.65243 7.67519 5.24969 9.40554 5.24969C11.1359 5.24969 12.5386 6.65243 12.5386 8.38278C12.5386 10.1131 11.1359 11.5159 9.40554 11.5159ZM9.40554 6.8162C8.54037 6.8162 7.839 7.51757 7.839 8.38274C7.839 9.24792 8.54037 9.94928 9.40554 9.94928C10.2707 9.94928 10.9721 9.24792 10.9721 8.38274C10.9721 7.51757 10.2708 6.8162 9.40554 6.8162Z"
                fill="currentColor"
              />
            </g>
          </svg>
          <span className={`${handles.text} ${handles.modal} text`}>
            <strong>Ingresar</strong> tu ubicacion
          </span>
        </button>
      </div>
      <Modal isOpen={isOpen} onClose={handleCloseModal} />
    </>
  );
};

const messages = defineMessages({
  title: { defaultMessage: "Pickup Point" },
  description: { defaultMessage: "Pickup Point" },
});

PickupStore.schema = {
  title: messages.title.defaultMessage,
  description: messages.description.defaultMessage,
};

export default PickupStore;
