
import coctails from "../Coctails/Coctails";
import GridItem from "../Grid/GridItem";

const StrongAlcohol = () => {
  const strongAlcoholCoctails = coctails.filter(
    (item) => item.class === "str_alk"
  );

  console.log(strongAlcoholCoctails);

  const GridContainer = () => {
    return strongAlcoholCoctails.map((item) => (
      <GridItem img={item.src_sqv} name={item.name} />
    ));
  };

  return (
    <div className="grid">
      <GridContainer />
    </div>
  );
};

export default StrongAlcohol;