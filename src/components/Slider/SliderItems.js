import './Slider.css';

const SliderItems = (props) => {
  return (  
    <div className = "slider__items" style={{backgroundImage: `url(${props.img})`}}>
    </div>
  );
}

export default SliderItems;