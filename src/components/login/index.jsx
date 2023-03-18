import logo from "../../assets/logo.png";
import React, { useState } from "react";
import axios from "axios";
const Login = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({
      ...data,
      [input.name]: input.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://192.168.1.121:3005/api/auth";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);
      window.location = "/";
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };
  return (
    <form
      className="container "
      style={{ height: "100vh", width: "100vw" }}
      onSubmit={handleSubmit}
    >
      <div className="col w-100">
        <div className="row w-50 m-auto">
          <img src={logo} alt="logo" />
        </div>
        <div className="row w-25 m-auto">
          <div className="mb-3 p-0">
            <label for="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              name="username"
              onChange={handleChange}
            ></input>
          </div>
          <div className="mb-3 p-0">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={handleChange}
            ></input>
          </div>
          {error && <div> {error}</div>}
          <button type="submit" className="btn btn-primary w-100 ">
            Login
          </button>
        </div>
      </div>
    </form>
    // <div className={styles.signup_container}>
    //   <div className={styles.signup_form_container}>
    //     <div className={styles.left}>
    //       <h1>Welcome Back</h1>
    //       <Link to="/login">
    //         <button type="button" className={styles.white_btn}>
    //           Sign In
    //         </button>
    //       </Link>
    //     </div>
    //     <div className={styles.right}>
    //       <form className={styles.form_container} onSubmit={handleSubmit}>
    //         <h1>Create Account</h1>

    //         <input
    //           type="text"
    //           placeholder="Username"
    //           name="username"
    //           value={data.username}
    //           onChange={handleChange}
    //           required
    //           className={styles.input}
    //         />
    //         <input
    //           type="password"
    //           placeholder="Password"
    //           name="password"
    //           value={data.password}
    //           onChange={handleChange}
    //           required
    //           className={styles.input}
    //         />
    //         {error && <div> {error}</div>}
    //         <button type="submit" className={styles.green_btn}>
    //           Login
    //         </button>
    //       </form>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Login;
