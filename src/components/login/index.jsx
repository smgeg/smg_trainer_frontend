import React, { useState, useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import UserContext from "../../context/UserContext";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
const apiUrl = process.env.REACT_APP_BACKEND_URL;
const Login = () => {
  const formSchema = yup.object().shape({
    username: yup.string().required("مطلوب اسم المستخدم"),
    password: yup.string().required("مطلوب كلمة المرور"),
  });
  const location = useLocation();
  const navigate = useNavigate();
  const { login } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const formOptions = { resolver: yupResolver(formSchema) };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(formOptions);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const url = `${apiUrl}/api/auth`;
      const res = (await axios.post(url, data)).data;
      localStorage.setItem("user", JSON.stringify(res.data.user));
      localStorage.setItem("token", res.data.token);
      login(res.data.user, res.data.token);
      if (location.state?.from) {
        navigate(location.state.from, { state: { ...location.state } });
        return;
      }
      navigate("/courses");
    } catch (error) {
      if (error.response && error.response.status === 401) {
        NotificationManager.error(
          "اسم المستخدم او كلمة المرور غير صحيح",
          "خطأ"
        );
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      navigate("/courses");
      return;
    }
  });
  return (
    <div className="container d-flex h-100">
      <NotificationContainer />
      <form
        className="mt-5 mx-auto"
        style={{ width: "35%" }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="col">
          <div className="row m-auto">
            <div className="mb-3 p-0">
              <label for="inputUsername" className="form-label">
                اسم المستخدم
              </label>
              <input
                {...register("username")}
                type="text"
                className={`form-control ${
                  errors.username ? "is-invalid" : ""
                }`}
                id="inputUsername"
              />
              <div className="invalid-feedback">
                {errors.username && errors.username.message}
              </div>
            </div>
            <div className="mb-3 p-0">
              <label for="inputPassword" className="form-label">
                كلمة المرور
              </label>
              <input
                {...register("password")}
                type="password"
                className={`form-control ${
                  errors.password ? "is-invalid" : ""
                }`}
                id="inputPassword"
              />
              <div className="invalid-feedback">
                {errors.password && errors.password.message}
              </div>{" "}
            </div>
            <button
              type="submit"
              className={`btn btn-primary w-100 ${loading ? "disabled" : ""}`}
            >
              {loading && loading ? (
                <span
                  class="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
              ) : (
                "تسجيل الدخول"
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
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
