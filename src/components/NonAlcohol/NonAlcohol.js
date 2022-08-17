import coctails from "../Coctails/Coctails";
import GridItem from "../Grid/GridItem";

const NonAlcohol = () => {
  const nonAlcoholCoctails = coctails.filter(
    (item) => item.class === "non_alk"
  );


  const GridContainer = () => {
    return nonAlcoholCoctails.map((item) => (
      <GridItem img={item.src_sqv} name={item.name} />
    ));
  };

  return (
    <div className="grid">
      <GridContainer />
    </div>
  );
};

export default NonAlcohol;