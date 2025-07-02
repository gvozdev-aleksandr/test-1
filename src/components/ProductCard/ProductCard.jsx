import React, { useState } from "react";
import { ProductContainer, ProductTitle, StyledImg, InfoWrapper, Price, ModalButton } from "./styled";
import Modal from "../Modal/Modal";

function ProductCard({ name, price, category, img, description }) {
    const [isOpen, setIsOpen] = useState(false);
    const formattedPrice = new Intl.NumberFormat('de-DE').format(price);

    return (
        <ProductContainer>
            <ProductTitle>{name}</ProductTitle>
            <StyledImg src={img} alt={name} loading="lazy" />
            <InfoWrapper>
                <Price>Цена {formattedPrice} €</Price>
                <span>{category}</span>
            </InfoWrapper>
            <ModalButton
                type="button"
                aria-haspopup="dialog"
                aria-expanded={isOpen}
                onClick={() => setIsOpen(true)}
            >
                Подробнее
            </ModalButton>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>                
                <p>{description}</p>                
            </Modal>

        </ProductContainer>
    )
}

export default ProductCard;
