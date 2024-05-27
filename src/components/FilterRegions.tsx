import React, { useState } from "react";
import {
  RegionBox,
  RegionConBox,
  RegionConWrapper,
} from "../styles/FilterRegionsStyles";
import { IoIosArrowForward } from "react-icons/io";
import { useDarkModeContext } from "../context/DarkModeContext";

const FilterRegions = () => {
  const { mode } = useDarkModeContext();

  const [showRegions, setShowRegions] = useState<boolean>(false);

  const handleShowRegions = () => {
    setShowRegions((prev) => !prev);
  };

  return (
    <RegionConWrapper>
      <RegionConBox
        $mode={mode}
        $showRegions={showRegions}
        onClick={handleShowRegions}
      >
        <div>
          <p>Filter by Region</p>
          <IoIosArrowForward />
        </div>
      </RegionConBox>
      {showRegions && (
        <RegionBox $mode={mode}>
          <ul>
            <li>
              <p>africa</p>
            </li>
            <li>
              <p>America</p>
            </li>
            <li>
              <p>Asia</p>
            </li>
            <li>
              <p>Europe</p>
            </li>
          </ul>
        </RegionBox>
      )}
    </RegionConWrapper>
  );
};

export default FilterRegions;
