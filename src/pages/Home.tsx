import React, { useState } from "react";
import Header from "../components/layouts/Header";
import { DarkModeContext } from "../context/DarkModeContext";
import { ModeInter } from "../types/ContextTypes";
import SearchContent from "../components/SearchContent";
import { Box } from "../styles/HomeStyles";

const Home = () => {
  const [mode, setMode] = useState<boolean>(false);

  const handleChangeMode = () => {
    setMode((prevMode) => !prevMode);
  };

  const DarkModeContextValue: ModeInter = {
    mode,
    handleChangeMode,
  };

  return (
    <Box $mode={mode}>
      <DarkModeContext.Provider value={DarkModeContextValue}>
        <Header />
        <SearchContent />
      </DarkModeContext.Provider>
    </Box>
  );
};

export default Home;
