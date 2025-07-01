import React from "react";
import { ProductContainer, ProductTitle } from "./styled";

function ProductCard({ name, price, category }) {
    return <ProductContainer>
        <ProductTitle>{name}</ProductTitle>
        <span>{price} €</span>
        <span>{category}</span>
        <button type="button">Подробнее</button>
    </ProductContainer>
}

export default ProductCard;
