import React from "react";
import PropTypes from "prop-types";

function Movie({ id, years, title, summary, poster }) {
  return <h4>{title}</h4>;
}

Movie.prototype = {
  id: PropTypes.number.isRequired,
  years: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movie;
