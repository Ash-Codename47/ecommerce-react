import PropTypes from "prop-types";
import React, { useState } from "react";
import { connect } from "react-redux";
import { loginService } from "../services/auth.service";
import { useNavigate } from "react-router-dom";
import { loginAction } from "../redux/actions/auth.action";

const initalState = {
  email: "",
  password: "",
};

const Login2 = (props) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initalState);
  const [error, setError] = useState({});
  const { email, password } = formData;

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("hey from login");
    console.log(formData);
    loginAction(formData, navigate);
    // loginService(formData)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     let errDetails = {};
    //     err.response.data.errors.forEach((e) => {
    //       console.log(e.param + " " + e.msg);
    //       errDetails[e.param] = e.msg;
    //     });
    //     setError({ ...errDetails });
    //   });
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <section class="container">
        <div class="alert alert-danger">Invalid credentials</div>
        <h1 class="large text-primary">Sign In</h1>
        <p class="lead">
          <i class="fas fa-user"></i> Sign into Your Account
        </p>
        <form class="form" onSubmit={onSubmit}>
          <div class="form-group">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={onChange}
              required
            />
            <div>{error.email}</div>
          </div>
          <div class="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={onChange}
            />
            <div>{error.password}</div>
          </div>
          <input type="submit" class="btn btn-primary" value="Login" />
        </form>
        <p class="my-1">
          Don't have an account? <a href="register.html">Sign Up</a>
        </p>
      </section>
    </>
  );
};

Login2.propTypes = {};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Login2);
