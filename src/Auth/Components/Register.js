import React, { useState } from "react";
import { registerService } from "../services/auth.service";

const initalState = {
  name: "",
  password: "",
  email: "",
  password2: "",
};

const Register = () => {
  const [formData, setFormData] = useState(initalState);
  const [error, setError] = useState({});
  const { name, password, email, password2 } = formData;
  // password = formData.password;
  // email = formData.email;
  // password2 = formData.password2;
  // name = formData.name
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("hey from register");
    console.log(formData);
    registerService(formData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        let errDetails = {};
        err.response.data.errors.forEach((e) => {
          console.log(e.param + " " + e.msg);
          errDetails[e.param] = e.msg;
        });
        setError({ ...errDetails });
      });
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <>
      <section class="container">
        <h1 class="large text-primary">Sign Up</h1>
        <p class="lead">
          <i class="fas fa-user"></i> Create Your Account
        </p>
        <form class="form" onSubmit={onSubmit}>
          <div class="form-group">
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={onChange}
              required
            />
            <div>{error.name}</div>
          </div>
          <div class="form-group">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={onChange}
            />
            <div>{error.email}</div>
            <small class="form-text">
              This site uses Gravatar so if you want a profile image, use a
              Gravatar email
            </small>
          </div>
          <div class="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={onChange}
              minLength="6"
            />
            <div>{error.password}</div>
          </div>
          <div class="form-group">
            <input
              type="password"
              placeholder="Confirm Password"
              name="password2"
              value={password2}
              onChange={onChange}
              minLength="6"
            />
            <div>{error.password2}</div>
          </div>
          <input type="submit" class="btn btn-primary" value="Register" />
        </form>
        <p class="my-1">
          Already have an account? <a href="login.html">Sign In</a>
        </p>
      </section>
    </>
  );
};

export default Register;
