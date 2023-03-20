import React from "react";

function Successful() {
  setTimeout(() => {
    window.location = "/courses";
  }, 3000);
  return (
    <div>
      <div className="bg-success w-50 bg-opacity-25 border border-dark rounded p-3 text-center m-auto mt-5">
        <h3 className="fw-bold">تم ارسال طلبك </h3>
        <p className="fs-4 ">سوف نتواصل معك في اسرع وقت ممكن</p>
      </div>
    </div>
  );
}

export default Successful;
