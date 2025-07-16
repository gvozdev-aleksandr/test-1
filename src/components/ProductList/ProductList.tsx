import React, { useState } from "react";
import ProductCard from '@components/ProductCard/ProductCard'
import Filter from "../Filter/Filter";
import { StyledSection, Container, StyledList, StyledItem } from "./styled";
import { Products } from "@mocks/products";

type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
};

const FILTER_OPTIONS = ['Смартфоны', 'Планшеты', 'Аксессуары', 'Все товары'];
type FilterOption = typeof FILTER_OPTIONS[number];

function ProductList() {
    const [selected, setSelected] = useState<FilterOption | ''>('');
    const visibleProducts = Products.filter((product: Product) =>
        !selected || selected === 'Все товары' || product.category === selected
    );    

    return (
        <StyledSection>
            <Container>
                <Filter selected={selected} setSelected={setSelected as (option: string) => void} options={FILTER_OPTIONS} />
                <StyledList>
                    {visibleProducts.map((product: Product) => (
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
