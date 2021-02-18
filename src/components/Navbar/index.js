import React from "react";
import CodeBrand from '../../assests/images/codeBrand.png';
import { StyledNavBar, BrandContainer, Brand, NavItemContainer, NavItem } from './styles';

const NavBar = () => {
    return (
        <StyledNavBar>
            <BrandContainer>
                <Brand src={CodeBrand} />
                <NavItemContainer >
                    <NavItem>Events</NavItem>
                </NavItemContainer>
            </BrandContainer>
        </StyledNavBar>
    )
};

export default NavBar;