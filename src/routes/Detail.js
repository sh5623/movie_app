import React from "react";
import "./Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      return (
        <div className="detail">
          <span className="detail_title">{location.state.title}</span>
          <p className="detail_summary">{location.state.summary}</p>
          <img
            className="detail_background"
            src={location.state.background}
            alt={location.state.title}
          ></img>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
