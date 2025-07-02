import styled from "styled-components";

export const FilterWrapper = styled.div`
    margin-bottom: 20px;
`;

export const SelectButton = styled.button`
    width: 100%;
    text-align: start;
    padding: 12px 24px;
    border: none;
    background-color: orange;

    &:hover {
        box-shadow: 0 0 2px 2px black inset;
    }
`;

export const DropDownList = styled.ul`
    width: 100%;
    padding: 0;
    margin: 0;
    list-style: none;
`;

export const DropDownItem = styled.li`
    padding: 12px 24px;

    &:hover {
        box-shadow: 0 0 2px 2px black inset;
    }
`;
