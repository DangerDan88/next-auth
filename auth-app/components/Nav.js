import React from "react";
import Link from "next/link";
import styled from "styled-components";
//import Logo from "./Logo";

export const StyledNavBar = styled.nav`
  display: grid;
  grid-template-columns: 1fr auto;
  padding: 20px;
`;

export const StyledNavBrand = styled.div`
  font-size: 1.4rem;
  text-align: left & > a {
    text-decoration: none;
  }
`;

export const StyledNavItems = styled.ul`
  list-style: none;
  padding-left: 0;
  display: grid;
  grid-auto-flow: column;
  grid-gap: 20px;
`;

export const StyledLinkButton = styled(Link)`
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 200ms;
`;

export default function Nav() {
  return (
    <StyledNavBar>
      {" "}
      <StyledNavBrand>
        <StyledLinkButton href="/">SLC Fit</StyledLinkButton>
      </StyledNavBrand>
      <StyledNavItems>
        <li>
          <StyledLinkButton href="/">Home</StyledLinkButton>
        </li>
        <li>
          <StyledLinkButton href="/meals">Meals</StyledLinkButton>
        </li>
        <li>
          <StyledLinkButton href="/addmeals">Add a Meal</StyledLinkButton>
        </li>
        <li>
          <StyledLinkButton href="/login">Login/Signup</StyledLinkButton>
        </li>
      </StyledNavItems>
    </StyledNavBar>
  );
}
