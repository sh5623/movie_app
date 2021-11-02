import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

class Home extends React.Component {
  state = {
    isLoding: true,
    movies: [],
    id: "",
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );

    this.setState({ movies: movies, isLoding: false });
  };

  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      alert("잘못된 접근입니다.");
      history.push("/");
    } else if (location.state.isAuth === true) {
      this.setState({ id: location.state.id });
      this.getMovies();
    }
  }

  render() {
    const { isLoding, movies, id } = this.state;
    return (
      <section className="container">
        {isLoding ? (
          <div className="loader">
            <span className="loader_text">Hello {id} !</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
                background={movie.background_image}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default Home;
