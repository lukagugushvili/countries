import React from "react";
import { HeaderBox, HeaderCon, ModeBox } from "../../styles/HeaderStyles";
import { Container } from "../../styles/ContainerStyles";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

const Header = () => {
  return (
    <HeaderCon>
      <Container>
        <HeaderBox>
          <h2>Where in the world?</h2>
          <ModeBox>
            <IoMoonOutline />
            <p>Dark Mode</p>
          </ModeBox>
        </HeaderBox>
      </Container>
    </HeaderCon>
  );
};

export default Header;
