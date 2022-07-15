import React, { FC, PropsWithChildren } from "react";

interface ModalProps {
  isOpen: boolean;
  handleClose: () => void;
}

const Modal: FC<PropsWithChildren<ModalProps>> = ({
  isOpen,
  children,
  handleClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="Modal">
      <button onClick={handleClose} className="close-btn">
        Close
      </button>

      <div className="modal-content">{children}</div>
    </div>
  );
};
export default Modal;
