import GridItem from "../Grid/GridItem";

const StrongAlcohol = (props) => {
  const strongAlcoholCoctails = props.arr.filter(
    (item) => item.class === "str_alk"
  );
  
  const GridContainer = () => {
    return strongAlcoholCoctails.map((item, index) => (
      <GridItem img={item.src_sqv} name={item.name} key={`gridItem${index + 1}`} />
    ));
  };

  return (
    <div className="grid">
      <GridContainer />
    </div>
  );
};

export default StrongAlcohol;