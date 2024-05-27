import React from "react";
import { HeaderBox, HeaderCon, ModeBox } from "../../styles/HeaderStyles";
import { Container } from "../../styles/ContainerStyles";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { useDarkModeContext } from "../../context/DarkModeContext";

const Header = () => {
  const { mode, handleChangeMode } = useDarkModeContext();

  return (
    <HeaderCon $mode={mode}>
      <Container>
        <HeaderBox $mode={mode}>
          <h2>Where in the world?</h2>
          <ModeBox onClick={handleChangeMode} $mode={mode}>
            {!mode ? <IoMoonOutline /> : <IoSunnyOutline color="white" />}
            <p>Dark Mode</p>
          </ModeBox>
        </HeaderBox>
      </Container>
    </HeaderCon>
  );
};

export default Header;
