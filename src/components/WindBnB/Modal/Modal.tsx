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
      <div className="modal-content">{children}</div>
    </div>
  );
};
export default Modal;
