import { Component } from "react";
import coctails from "../Coctails/Coctails";

export default class SliderOfSeason extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    fetch("http://worldtimeapi.org/api/timezone/Europe/Moscow")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.datetime,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    
    const { error, isLoaded, items } = this.state;
    let date = new Date(this.state.items);
    const month = date.getMonth() + 1;
    const summerArr = coctails.filter((item) => item.season === "summer");
    console.log(summerArr)

    if (error) {
      console.log("Ошибка. Запрос не выполнен: ", error);
    } else if (!isLoaded) {
      return <p> Loading... </p>;
    } else if (month === 6 || month === 7 || month === 8) {
      summerArr.map((item) => {
        return (
          <div
            className="slider__items"
            style={{ backgroundImage: `url(${item.src})` }}
          ></div>
        );
      });
    }
  }
}
