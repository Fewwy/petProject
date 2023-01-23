import "./Grid.css";
import GridItem from "./GridItem";
import { useSelector } from "react-redux";

const Grid = () => {
  const coctails = useSelector((state) => state.coctails);

  const GridContainer = () => {
    return coctails.map((item, index) => (
      <GridItem
        img={item.src_sqv}
        name={item.name}
        key={`gridItem${index + 1}`}
        id={item.id}
        class={item.class}
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
