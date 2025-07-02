import React, { useEffect } from "react";
import { StyledModal, ModalBackdrop, ModalTitle, ModalDescription, ModalPrice, ModalImg } from "./styled";

function Modal({ isOpen, onClose, description, name, img, price }) {  
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
    <ModalBackdrop
      onClick={handleBackdropClick}
      aria-modal="true"
      aria-hidden={!isOpen}
    >
      <StyledModal role="dialog" aria-labelledby="modal-title">
        <button 
          className="close-button" 
          onClick={onClose}
          aria-label="Закрыть модальное окно"
          autoFocus
          tabIndex={0}
        >
          &times;
        </button>
        <ModalTitle>{name}</ModalTitle>
        <ModalDescription>{description}</ModalDescription>
        <ModalPrice>Цена {price} €</ModalPrice>
        <ModalImg src={img} alt={name}/>
      </StyledModal>
    </ModalBackdrop>
  );
}

export default Modal;