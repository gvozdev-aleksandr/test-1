import styled from 'styled-components';

export const ProductContainer = styled.div`
    //position: relative;
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.bgCard};
    border-radius: 20px;
    padding: 15px;
`;

export const ProductTitle = styled.h2`
    margin: 0;
`;

export const StyledImg = styled.img`
    width: 100%;
    height: auto;
    object-fit: contain;
    min-height: 260px;
`;

export const InfoWrapper = styled.p`
    flex-grow: 1;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-between;
`;

export const Price = styled.span`
    padding: 0;
    margin: 0;
    font-weight: 500;
`;

export const ModalButton = styled.button`
    padding: ${({ theme }) => theme.buttonPadding};
    align-self: center;
    border: none;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.bgButton};
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;

    &:hover {
        background-color: ${({ theme }) => theme.bgButtonHover};
    }
`;
