import React, { useEffect, useState } from "react";
import Header from "../components/layouts/Header";
import { DarkModeContext } from "../context/DarkModeContext";
import { ModeInter } from "../types/ContextTypes";
import SearchContent from "../components/SearchContent";
import { Box } from "../styles/HomeStyles";
import { DataType } from "../types/DataTypes";
import Loader from "../utils/Loader";
import internal from "stream";
import { ErrorCon } from "../styles/ErrorSyles";

const Home = () => {
  const [mode, setMode] = useState<boolean>(false);
  const [countries, setCountries] = useState<DataType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const API_URl = "https://restcountries.com/v3.1/all";
      setIsLoading(true);
      try {
        const res = await fetch(API_URl);

        if (!res.ok) {
          throw new Error(`Network response was not ok`);
        }

        const data = await res.json();
        setCountries(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log(countries);

  const handleChangeMode = () => {
    setMode((prevMode) => !prevMode);
  };

  const DarkModeContextValue: ModeInter = {
    mode,
    handleChangeMode,
  };

  if (error) {
    return <ErrorCon>Something went wrong! Please try again.</ErrorCon>;
  }

  if (isLoading) {
    return <Loader />;
  }

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
