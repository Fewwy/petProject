import "./Grid.css";
import coctails from "../Coctails/Coctails";
import GridItem from "./GridItem";
import { useState } from "react";

const Grid = () => {
  const [filteredCoctails, setFilteredCoctails] = useState(coctails);

  const GridContainer = () => {
    return filteredCoctails.map((item, index) => (
      <GridItem
        img={item.src_sqv}
        name={item.name}
        key={`gridItem${index + 1}`}
      />
    ));
  };

  return (
    <div className="grid">
      <GridContainer />
    </div>
  );
};

export default Grid;
