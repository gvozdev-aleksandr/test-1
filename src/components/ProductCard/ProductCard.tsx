import { useState } from "react";
import { ProductContainer, ProductTitle, StyledImg, InfoWrapper, Price, ModalButton } from "./styled";
import Modal from "../Modal/Modal";

interface ProductCardProps {
    name: string;
    price: number;
    category: string;
    image: string;
    description: string
}

function ProductCard({ name, price, category, image, description }: ProductCardProps) {
    const [isOpen, setIsOpen] = useState(false);
    const formattedPrice = new Intl.NumberFormat('de-DE').format(price);    

    return (
        <ProductContainer>
            <ProductTitle>{name}</ProductTitle>
            <StyledImg src={image} alt={name} loading="lazy" />
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
            <Modal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                description={description}
                name={name}
                price={formattedPrice}
                img={image}
            />                    
        </ProductContainer>
    )
}

export default ProductCard;
