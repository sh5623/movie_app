import React from "react";
import axios from "axios";
import { Redirect } from "react-router";

class Login extends React.Component {
  state = {
    id: "",
    password: "",
    isAuth: false,
  };

  getLogin = async ({ id, password }) => {
    const optionAxios = {
      headers: {
        "content-Type": "application/json",
      },
    };

    await axios
      .post(
        `http://146.56.174.150:8080/user/login`,
        {
          userId: id,
          userPassword: password,
        },
        optionAxios
      )
      .then((res) => {
        if (res.data.result === true) {
          alert("Login Success");

          this.setState({ isAuth: true });
        }
      })
      .catch((error) => {
        alert(error.response.data.error);
      });
  };

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  render() {
    const { id, password, isAuth } = this.state;

    return (
      <div>
        {isAuth ? (
          <Redirect
            to={{
              pathname: `/home/`,
              state: {
                id,
                isAuth,
              },
            }}
          ></Redirect>
        ) : (
          <div>
            <span>ID : </span>
            <input
              name="id"
              defaultValue={id}
              onChange={this.handleChange}
            ></input>
            <span>Password : </span>
            <input
              name="password"
              defaultValue={password}
              onChange={this.handleChange}
              type="password"
            ></input>
            <button onClick={this.getLogin.bind(this, { id, password })}>
              Login
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Login;
