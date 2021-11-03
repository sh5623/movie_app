import React from "react";
import axios from "axios";
import "./Home.css";

class Tour extends React.Component {
  state = {
    serviceKey:
      "96EIT1koaTBt2OfbhSFR9PyKGOKS%2FAMqgeugwN1XT2QwjnE97ZiG1uszeNCPJquN2y2XIYC8GX8BlAcpvUcusw%3D%3D",
    perPage: 10,
    page: 1,
    _type: "json",
    tourData: [],
  };

  getMovies = async () => {
    const { serviceKey, perPage, page, _type } = this.state;
    await axios
      .get(
        `https://api.odcloud.kr/api/15003416/v1/uddi:a635e6c7-82cf-4714-b002-c7cf4cb20121_201609071527?serviceKey=${serviceKey}&perPage=${perPage}&page=${page}&_type=${_type}`
      )
      .then((res) => {
        this.setState({ tourData: res.data.data });
        console.log(this.state.tourData);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    return (
      <section className="container">
        <div className="movies">
          <span>Tour</span>
        </div>
      </section>
    );
  }
}

export default Tour;
