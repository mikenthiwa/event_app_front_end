import styled from "styled-components";

export const StyledNavBar = styled.div`
    height: 50px;
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid rgb(184, 195, 204);
    padding: 0 30px;
    background: rgb(255, 255, 255);
    position: fixed;
    width: 100%;
`;

export const BrandContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Brand = styled.img`
    width: 50px
`;

export const NavItemContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 200px;
    position: absolute;
    left: 35%;
    top: 11px
`;

export const NavItem = styled.div`
    padding: 5px 10px 11px 10px;
    cursor: pointer;
    color: rgb(88, 99, 109) !important;
    font-size: 1rem;
    &:hover {
        border-bottom: 5px solid rgb(6, 117, 206)
    }
`