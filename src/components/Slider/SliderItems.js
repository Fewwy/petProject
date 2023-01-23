import './Slider.css';

const SliderItems = (props) => {
  return (  
    <div className = "slider__items" style={{backgroundImage: `url(${props.img})`}}>
      <h2 className="slider__name">{props.name}</h2>
    </div>
  );
}

export default SliderItems;