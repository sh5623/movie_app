import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../components/Movie.css";

function TourList({
  id,
  name,
  region,
  address,
  phoneNumber,
  firstClass,
  secondClass,
  thirdClass,
}) {
  return (
    <div className="movie">
      <Link
        to={{
          pathname: `/tour/${id}`,
          state: {
            id,
            name,
            region,
            address,
            phoneNumber,
            firstClass,
            secondClass,
            thirdClass,
          },
        }}
      >
        <div className="movie_data">
          <h3 className="movie_title">{name}</h3>
          <h5 className="movie_year">{region}</h5>
          <p className="movie_sumarry">대분류 : {firstClass}</p>
        </div>
      </Link>
    </div>
  );
}

TourList.prototype = {
  firstClass: PropTypes.string,
  secondClass: PropTypes.string,
  thirdClass: PropTypes.string,
  cities: PropTypes.string,
  cities_lower: PropTypes.string,
  address: PropTypes.string,
  name: PropTypes.string,
  region: PropTypes.string,
  phoneNumber: PropTypes.string,
};

export default TourList;
