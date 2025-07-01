import React from "react";
import ProductCard from '@components/ProductCard/ProductCard'
import { StyledSection, Container, StyledList, StyledItem } from "./styled";
import { Products } from "@mocks/products";

function ProductList() {
    return (
        <StyledSection>
            <Container>
                <div className="filter"></div>
                <StyledList>
                    {Products.map((product) => (
                        <StyledItem key={product.id}>
                            <ProductCard
                                name={product.name}
                                price={product.price}
                                category={product.category}
                                img={product.image}
                                description={product.description}
                            />
                        </StyledItem>
                    ))}
                </StyledList>
            </Container>
        </StyledSection>
    )
}

export default ProductList;
