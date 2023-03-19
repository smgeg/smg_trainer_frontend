import React, { useState } from "react";
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

  const [selectedOption, setSelectedOption] = useState("individual");
  const [selectedGovernorate, setSelectedGovernorate] = useState("اختر...");
  const governorate = [
    { id: "1", governorate_name_ar: "القاهرة", governorate_name_en: "Cairo" },
    { id: "2", governorate_name_ar: "الجيزة", governorate_name_en: "Giza" },
    {
      id: "3",
      governorate_name_ar: "الأسكندرية",
      governorate_name_en: "Alexandria",
    },
    {
      id: "4",
      governorate_name_ar: "الدقهلية",
      governorate_name_en: "Dakahlia",
    },
    {
      id: "5",
      governorate_name_ar: "البحر الأحمر",
      governorate_name_en: "Red Sea",
    },
    { id: "6", governorate_name_ar: "البحيرة", governorate_name_en: "Beheira" },
    { id: "7", governorate_name_ar: "الفيوم", governorate_name_en: "Fayoum" },
    {
      id: "8",
      governorate_name_ar: "الغربية",
      governorate_name_en: "Gharbiya",
    },
    {
      id: "9",
      governorate_name_ar: "الإسماعلية",
      governorate_name_en: "Ismailia",
    },
    {
      id: "10",
      governorate_name_ar: "المنوفية",
      governorate_name_en: "Menofia",
    },
    { id: "11", governorate_name_ar: "المنيا", governorate_name_en: "Minya" },
    {
      id: "12",
      governorate_name_ar: "القليوبية",
      governorate_name_en: "Qaliubiya",
    },
    {
      id: "13",
      governorate_name_ar: "الوادي الجديد",
      governorate_name_en: "New Valley",
    },
    { id: "14", governorate_name_ar: "السويس", governorate_name_en: "Suez" },
    { id: "15", governorate_name_ar: "اسوان", governorate_name_en: "Aswan" },
    { id: "16", governorate_name_ar: "اسيوط", governorate_name_en: "Assiut" },
    {
      id: "17",
      governorate_name_ar: "بني سويف",
      governorate_name_en: "Beni Suef",
    },
    {
      id: "18",
      governorate_name_ar: "بورسعيد",
      governorate_name_en: "Port Said",
    },
    { id: "19", governorate_name_ar: "دمياط", governorate_name_en: "Damietta" },
    {
      id: "20",
      governorate_name_ar: "الشرقية",
      governorate_name_en: "Sharkia",
    },
    {
      id: "21",
      governorate_name_ar: "جنوب سيناء",
      governorate_name_en: "South Sinai",
    },
    {
      id: "22",
      governorate_name_ar: "كفر الشيخ",
      governorate_name_en: "Kafr Al sheikh",
    },
    { id: "23", governorate_name_ar: "مطروح", governorate_name_en: "Matrouh" },
    { id: "24", governorate_name_ar: "الأقصر", governorate_name_en: "Luxor" },
    { id: "25", governorate_name_ar: "قنا", governorate_name_en: "Qena" },
    {
      id: "26",
      governorate_name_ar: "شمال سيناء",
      governorate_name_en: "North Sinai",
    },
    { id: "27", governorate_name_ar: "سوهاج", governorate_name_en: "Sohag" },
  ];
  return (
    <div>
      <Navbar />

      <div className="container  align-items-center justify-content-center">
        <h1 className="mb-5">تسجيل حساب جديد</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="col-md-6 mb-3 mx-auto">
            <label for="inputUsername" className="form-label">
              اسم المستخدم
            </label>
            <input
              {...register("username")}
              type="text"
              className="form-control"
              id="inputUsername"
            />
          </div>
          <div className="col-md-6 mb-3 mx-auto">
            <label for="inputPassword" className="form-label">
              كلمة المرور
            </label>
            <input
              {...register("password")}
              type="password"
              className="form-control"
              id="inputPassword"
            />
          </div>
          <div className="col-md-6 mb-3 mx-auto">
            <label for="inputConfirmPassword" className="form-label">
              تأكيد كلمة المرور
            </label>
            <input
              {...register("confirmPassword")}
              type="password"
              className="form-control"
              id="inputConfirmPassword"
            />
          </div>
          <div className="col-md-6 mb-3 mx-auto">
            <label for="inputName" className="form-label">
              الاسم
            </label>
            <input
              {...register("name")}
              type="text"
              className="form-control"
              id="inputName"
            />
          </div>
          <div className="col-md-6 mb-3 mx-auto">
            <label for="inputEmail" className="form-label">
              ايميل
            </label>
            <input
              {...register("email")}
              type="email"
              className="form-control"
              id="inputEmail"
            />
          </div>
          <div className="col-md-6 mb-3 mx-auto">
            <label for="inputPhone" className="form-label">
              موبايل (واتس)
            </label>
            <input
              {...register("phone")}
              type="tel"
              className="form-control"
              id="inputPhone"
            />
          </div>

          <div className="col-md-6 mb-3 mx-auto">
            <label for="inputPhone" className="form-label">
              المحاقظة
            </label>
            <select
              {...register("governorate")}
              className="form-select"
              aria-label=".form-select-lg example"
              value={selectedGovernorate}
              onChange={(event) => {
                setSelectedGovernorate(event.target.value);
              }}
            >
              <option selected>اختر ...</option>
              {governorate.map((e, key) => {
                return <option key={key}>{e.governorate_name_ar}</option>;
              })}
            </select>
          </div>

          <div className="col-md-6 mx-auto mb-3">
            <div className="form-check form-check-inline">
              <input
                {...register("type")}
                className="form-check-input"
                type="radio"
                name="type"
                id="individual"
                checked={selectedOption === "individual"}
                onChange={() => setSelectedOption("individual")}
              />
              <label className="form-check-label" for="individual">
                افراد
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                {...register("type")}
                className="form-check-input"
                type="radio"
                name="type"
                id="company"
                checked={selectedOption === "company"}
                onChange={() => setSelectedOption("company")}
              />
              <label className="form-check-label" for="company">
                شركات
              </label>
            </div>
          </div>
          <div
            className={
              "col-md-6 mb-3 mx-auto " +
              (selectedOption === "individual" && "d-none")
            }
          >
            <label for="inputCommercialRegister" className="form-label">
              رقم السجل التجاري
            </label>
            <input
              {...register("commercialRegister")}
              type="number"
              className="form-control"
              id="inputCommercialRegister"
            />
          </div>
          <div
            className={
              "col-md-6 mb-3 mx-auto " +
              (selectedOption === "individual" && "d-none")
            }
          >
            <label for="inputTaxNumber" className="form-label">
              رقم البطاقة الضريبية
            </label>
            <input
              {...register("taxNumber")}
              type="number"
              className="form-control"
              id="inputTaxNumber"
            />
          </div>
          <div className="col-md-6 mb-3 mx-auto">
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
