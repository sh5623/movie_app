import React from "react";
import axios from "axios";
import "./Home.css";
import TourList from "./TourList";

class Tour extends React.Component {
  state = {
    tourData: [],
    isLoding: false,
  };

  getTours = async () => {
    await axios
      .get(`http://146.56.174.150:8080/user/test`)
      .then((res) => {
        this.setState({ tourData: res.data.data, isLoding: true });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  componentDidMount() {
    this.getTours();
  }

  render() {
    const { isLoding, tourData } = this.state;
    return (
      <section className="container">
        {!isLoding ? (
          <div className="loader">
            <span className="loader_text">Now Loading ...</span>
          </div>
        ) : (
          <div className="movies">
            {tourData.map((tour, index) => (
              <TourList
                key={index}
                id={index}
                name={tour.정보명}
                region={tour.지역}
                address={tour.주소}
                phoneNumber={tour.문의및안내}
                firstClass={tour.대분류}
                secondClass={tour.중분류}
                thirdClass={tour.소분류}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default Tour;
