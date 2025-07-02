import styled from "styled-components";

export const StyledSection = styled.section`
    background-color: ${({ theme }) => theme.bgSection};
`;

export const Container = styled.div`
    min-width: ${({ theme }) => theme.mobileWidth};
    width: 100%;
    padding: ${({ theme }) => theme.mobilePaddingX} ${({ theme }) => theme.mobilePaddingY};
    margin: 0 auto;

    @media (min-width: ${({ theme }) => theme.desktopWidth}) {
        max-width: ${({ theme }) => theme.maxWidth};
        padding-block: ${({ theme }) => theme.desktopPaddingY};
        padding-inline: clamp(40px, 40px + 30 * (100vw - 600px) / 600, 70px);         
    } 
`;

export const StyledList = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
    display: grid;
    gap: 20px;

    @media (min-width: ${({ theme }) => theme.desktopWidth}) {
        grid-template-columns: 1fr 1fr;        
    } 
`;

export const StyledItem = styled.li`
    height: 100%;
    padding: 0;
`;
