import React, { useState, useEffect } from "react";
import { ImLocation, ImClock } from "react-icons/im";
import { RiMoneyPoundCircleFill } from "react-icons/ri";
import { MdPlayLesson } from "react-icons/md";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [subscriptions, setSubscriptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const apiUrl = process.env.REACT_APP_BACKEND_URL;
  const getCourses = async () => {
    try {
      const response = await axios.get(`${apiUrl}/api/courses/`);
      setCourses(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };
  const getSubscriptions = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const response = await axios.get(
        `${apiUrl}/api/subscriptions/c/${user.code}`
      );
      setSubscriptions(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getCourses();
    getSubscriptions();
    setLoading(false);
  }, [apiUrl]);

  const navigate = useNavigate();

  function handleSubscribe(e) {
    navigate("/subscribe", { state: { course: e } });
  }

  if (loading) {
    return (
      <div className="d-flex justify-content-center h-100">
        <div className="spinner-border m-auto" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  return (
    <div className="">
      <div className="fs-3 fw-bold mt-3">كورسات عامة</div>

      <div className="row row-cols-1 mt-3">
        {courses &&
          subscriptions &&
          courses.map((e, key) => {
            console.log(subscriptions);
            console.log(courses);
            return (
              <div className="col my-3">
                <div className="card">
                  <div className="row">
                    <div className="col-3 rounded-circle">
                      <img
                        width={"250px"}
                        height={"250px"}
                        src={e.img}
                        className="object-fit-cover m-3"
                        alt="..."
                      />
                    </div>
                    <div className="col">
                      <div className="card-body">
                        <h5 className="card-title fs-4 fw-bold">{e.title}</h5>
                        <p className="card-text mb-3">{e.desc}</p>
                        <div className="row">
                          <div className="col-auto">
                            <div className="input-group mb-3 ">
                              <span
                                class="input-group-text rounded-0 rounded-end"
                                style={{ background: "#eee" }}
                              >
                                <ImLocation className="ms-2" /> المكان
                              </span>

                              <span class="input-group-text rounded-0 rounded-start bg-white">
                                {e.location}
                              </span>
                            </div>
                          </div>
                          <div className="col-auto">
                            <div className="input-group mb-3 ">
                              <span
                                class="input-group-text rounded-0 rounded-end"
                                style={{ background: "#eee" }}
                              >
                                <MdPlayLesson className="ms-2" /> عدد المحاضرات
                              </span>

                              <span class="input-group-text rounded-0 rounded-start bg-white">
                                {e.no_of_lec}
                              </span>
                            </div>
                          </div>
                          <div className="col-auto">
                            <div className="input-group mb-3 ">
                              <span
                                class="input-group-text rounded-0 rounded-end"
                                style={{ background: "#eee" }}
                              >
                                <RiMoneyPoundCircleFill className="ms-2" />{" "}
                                السعر
                              </span>

                              <span class="input-group-text rounded-0 rounded-start bg-white">
                                {e.price}
                              </span>
                            </div>
                          </div>
                          <div className="col-auto">
                            <div className="input-group mb-3 ">
                              <span
                                class="input-group-text rounded-0 rounded-end"
                                style={{ background: "#eee" }}
                              >
                                <ImClock className="ms-2" /> عدد الساعات
                              </span>

                              <span class="input-group-text rounded-0 rounded-start bg-white">
                                {e.no_of_hours}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div
                          className={`
                          btn btn-danger ${
                            subscriptions.some(
                              (sub) => sub.course_code === e.code
                            )
                              ? " disabled"
                              : ""
                          }
                        `}
                          onClick={() => handleSubscribe(e)}
                        >
                          طلب الاشتراك
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default CourseList;
