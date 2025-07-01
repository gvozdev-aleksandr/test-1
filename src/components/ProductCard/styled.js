import styled from 'styled-components';

export const ProductContainer = styled.div`
    position: relative;
    display: grid;
    gap: 20px;
    width: 100%;
    background-color: blue;
    border-radius: 20px;
    padding: 10px;
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
    padding: 12px 36px;
    justify-self: center;
    border: none;
    border-radius: 8px;
    color: white;
    background-color: black;

    &:hover {
        color: black;
        background-color: white;
    }
`;
