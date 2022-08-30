import Facts from "../Facts/Facts";
import Grid from "../Grid/Grid";
import Slider from "../Slider/Slider";

const Home = (props) => {

  return (
    <>
      <Slider arr={props.arr} />
      <Facts />
      <Grid />
    </>
  );
};

export default Home;
