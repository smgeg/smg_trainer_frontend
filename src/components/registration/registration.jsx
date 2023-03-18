import React from "react";
import { useForm } from "react-hook-form";
import Navbar from "../global/navbar";
function RegistrationPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <Navbar />

      <div className="container  align-items-center justify-content-center">
        <h1 className="mb-5">تسجيل حساب جديد</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div class="col-md-6 mb-3 mx-auto">
            <label for="inputUsername" class="form-label">
              اسم المستخدم
            </label>
            <input
              {...register("username")}
              type="text"
              class="form-control"
              id="inputUsername"
            />
          </div>
          <div class="col-md-6 mb-3 mx-auto">
            <label for="inputEmail" class="form-label">
              ايميل
            </label>
            <input
              {...register("email")}
              type="email"
              class="form-control"
              id="inputEmail"
            />
          </div>
          <div class="col-md-6 mb-3 mx-auto">
            <label for="inputPhone" class="form-label">
              موبايل (واتس)
            </label>
            <input
              {...register("phone")}
              type="tel"
              class="form-control"
              id="inputPhone"
            />
          </div>
          <div class="col-md-6 mb-3 mx-auto">
            <label for="inputPassword" class="form-label">
              كلمة المرور
            </label>
            <input
              {...register("password")}
              type="password"
              class="form-control"
              id="inputPassword"
            />
          </div>
          <div class="col-md-6 mb-3 mx-auto">
            <label for="inputConfirmPassword" class="form-label">
              تأكيد كلمة المرور
            </label>
            <input
              {...register("confirmPassword")}
              type="password"
              class="form-control"
              id="inputConfirmPassword"
            />
          </div>
          <div class="col-md-6 mb-3 mx-auto">
            <button type="submit" className="btn btn-primary w-100">
              تسجيل
            </button>
          </div>
        </form>
        <footer>
          <p>Copyright © 2023</p>
        </footer>
      </div>
    </div>
  );
}

export default RegistrationPage;
