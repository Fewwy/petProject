import coctails from "../Coctails/Coctails";
import GridItem from "../Grid/GridItem";

const LowAlcohol = () => {
  const lowAlcoholCoctails = coctails.filter(
    (item) => item.class === "low_alk"
  );

  console.log(lowAlcoholCoctails);

  const GridContainer = () => {
    return lowAlcoholCoctails.map((item) => (
      <GridItem img={item.src_sqv} name={item.name} />
    ));
  };

  return (
    <div className="grid">
      <GridContainer />
    </div>
  );
};

export default LowAlcohol;