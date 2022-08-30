import GridItem from "../Grid/GridItem";

const NonAlcohol = (props) => {
  const nonAlcoholCoctails = props.arr.filter(
    (item) => item.class === "non_alk"
  );


  const GridContainer = () => {
    return nonAlcoholCoctails.map((item, index) => (
      <GridItem img={item.src_sqv} name={item.name} key={`gridItem${index + 1}`} />
    ));
  };

  return (
    <div className="grid">
      <GridContainer />
    </div>
  );
};

export default NonAlcohol;