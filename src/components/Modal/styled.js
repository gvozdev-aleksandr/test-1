import styled from 'styled-components';

export const ModalBackdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const StyledModal = styled.div`
  position: relative;
  background: white;
  border-radius: 10px;
  padding: 2rem;
  max-width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);

  .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
  }
`;