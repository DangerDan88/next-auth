import React from "react";
//import Image from "next/image";
import styled from "styled-components";
import Nav from "../components/Nav";

const HeaderStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  background-color: black;
  padding: 20px;
`;

const Head = styled.h1`
  font-family: "Indie Flower", cursive;
  font-size: 4.5 rem;
  color: blue;
`;

const Header = () => {
  return (
    <HeaderStyle>
      <Head>SLC FIT</Head>
      <Nav />
    </HeaderStyle>
  );
};

export default Header;
