import React, { useState } from "react";
import { ProductContainer, ProductTitle, StyledImg, InfoWrapper, Price, ModalButton } from "./styled";
import Modal from "../Modal/Modal";

function ProductCard({ name, price, category, img, description }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <ProductContainer>
            <ProductTitle>{name}</ProductTitle>
            <StyledImg src={img} />
            <InfoWrapper>
                <Price>Цена {price} €</Price>
                <span>{category}</span>
            </InfoWrapper>
            <ModalButton type="button" onClick={() => setIsOpen(true)}>Подробнее</ModalButton>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>                
                <p>{description}</p>                
            </Modal>

        </ProductContainer>
    )
}

export default ProductCard;
