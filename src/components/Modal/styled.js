import styled from 'styled-components';

export const ModalBackdrop = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const StyledModal = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({ theme }) => theme.secondaryTextColor};
  background: ${({ theme }) => theme.bgModal};
  border-radius: 10px;
  padding: 2rem;
  max-width: 80%;
  max-height: 50vh;
  overflow-y: auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);

  @media (min-width: ${({ theme }) => theme.desktopWidth}) {
        max-width: 50%;        
    } 

  .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.primaryTextColor};;
    }
  }
`;

export const ModalTitle = styled.h3`
  margin: 0;
`;

export const ModalDescription = styled.p`
  padding: 0;
  margin: 0;
`;

export const ModalPrice = styled.span`
  font-weight: 500;
`;

export const ModalImg = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
`;
