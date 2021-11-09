import React from "react";
import "./Detail.css";

class TourDetail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/tour");
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      return (
        <div className="detail">
          <span className="detail_title">{location.state.name}</span>
          <p className="detail_summary">지역 : {location.state.region}</p>
          <p className="detail_summary">주소 : {location.state.address}</p>
          <p className="detail_summary">
            연락처 : {location.state.phoneNumber}
          </p>
          <p className="detail_summary">대분류 : {location.state.firstClass}</p>
          <p className="detail_summary">
            중분류 : {location.state.secondClass}
          </p>
          <p className="detail_summary">소분류 : {location.state.thirdClass}</p>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default TourDetail;
