import React, { useEffect } from "react";
import { StyledModal, ModalBackdrop } from "./styled";

function Modal({ isOpen, onClose, children }) {  
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = ''; 
    };
  }, [isOpen, onClose]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <ModalBackdrop onClick={handleBackdropClick}>
      <StyledModal>
        <button 
          className="close-button" 
          onClick={onClose}
          aria-label="Закрыть модальное окно"
        >
          &times;
        </button>
        {children}
      </StyledModal>
    </ModalBackdrop>
  );
}

export default Modal;