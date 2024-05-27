import React from "react";
import { SearchBox, SearchCon } from "../styles/SearchContentStyles";
import { Container } from "../styles/ContainerStyles";
import SearchInput from "./_atoms/SearchInput";
import FilterRegions from "./FilterRegions";

const SearchContent = () => {
  return (
    <SearchCon>
      <Container>
        <SearchBox>
          <SearchInput />
          <FilterRegions />
        </SearchBox>
      </Container>
    </SearchCon>
  );
};

export default SearchContent;
