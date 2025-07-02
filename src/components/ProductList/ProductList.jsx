import React, { useState } from "react";
import ProductCard from '@components/ProductCard/ProductCard'
import Filter from "../Filter/Filter";
import { StyledSection, Container, StyledList, StyledItem } from "./styled";
import { Products } from "@mocks/products";

const FILTER_OPTIONS = ['Смартфоны', 'Планшеты', 'Аксессуары', 'Все товары'];

function ProductList() {
    const [selected, setSelected] = useState('');
    const visibleProducts = Products.filter((product) =>
        !selected || selected === 'Все товары' || product.category === selected
    );    

    return (
        <StyledSection>
            <Container>
                <Filter selected={selected} setSelected={setSelected} options={FILTER_OPTIONS} />
                <StyledList>
                    {visibleProducts.length === 0 ? null : visibleProducts.map((product) => (
                        <StyledItem key={product.id}>
                            <ProductCard {...product}/>
                        </StyledItem>
                    ))}
                </StyledList>
            </Container>
        </StyledSection>
    )
}

export default ProductList;
