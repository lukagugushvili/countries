import React from "react";
import { SearchInpBox } from "../../styles/SearchContentStyles";
import { CiSearch } from "react-icons/ci";
import { useDarkModeContext } from "../../context/DarkModeContext";

const SearchInput = () => {
  const { mode } = useDarkModeContext();
  return (
    <SearchInpBox $mode={mode}>
      <CiSearch />
      <input type="text" placeholder="Search for a country…" />
    </SearchInpBox>
  );
};

export default SearchInput;
