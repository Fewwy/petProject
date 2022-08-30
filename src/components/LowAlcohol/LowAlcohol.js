import GridItem from "../Grid/GridItem";

const LowAlcohol = (props) => {
  const lowAlcoholCoctails = props.arr.filter(
    (item) => item.class === "low_alk"
  );

  const GridContainer = () => {
    return lowAlcoholCoctails.map((item, index) => (
      <GridItem img={item.src_sqv} name={item.name} key={`gridItem${index + 1}`} />
    ));
  };

  return (
    <div className="grid">
      <GridContainer />
    </div>
  );
};

export default LowAlcohol;