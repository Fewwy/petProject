import "./Grid.css";
import coctails from "../Coctails/Coctails";
import GridItem from "./GridItem";
import { useState } from "react";

const Grid = () => {

  const GridContainer = () => {
    return (
      coctails.map(item => <GridItem img={item.src_sqv} name={item.name} />)
    )
  };

  return <div className="grid">
    <GridContainer />
  </div>;
};

export default Grid;
