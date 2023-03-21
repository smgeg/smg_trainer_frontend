import React from "react";
import { ImLocation, ImClock } from "react-icons/im";
import { RiMoneyPoundCircleFill } from "react-icons/ri";
import { MdPlayLesson } from "react-icons/md";
import { useLocation } from "react-router-dom";

function Subscribe() {
  const courses = [
    {
      title: "كورس اكسيل",
      desc: "تتناول دورة مايكروسوفت أوفيس كافة المبادئ والأدوات المستخدمة في حقيبة الأوفيس الإدارية بحيث يصبح المشارك في النهاية قادرا على الحد من الاعمال الورقية مع سرعة إنجاز العمل والخروج به بأحسن صورة ، فمن خلال مجموعة من المحاضرات على يد خبراء متخصصين سيتمكن الدارس من استخدام برامج الأوفيس بكل سهولة وتعلم أهم التعريفات في الإكسيل والوورد وكذلك الباور بونيت ، كما سنقوم بشرح وافي لأهم المعدلات المستخدمة في الإكسيل، وكذلك طريقة استخدام الشرائح التقديمية في الباور بوينت، وآلية كتابة المستندات بشكل احترافي كذلك.",
      price: 1500,
      no_of_lec: 12,
      location: "مقر الشركة | اونلاين",
      no_of_hours: 36,
      img: "https://assets.entrepreneur.com/content/3x2/2000/20191218181212-Ent-Excel.jpeg",
    },
  ];
  const location = useLocation();
  const course = location.state;
  console.log("STATE:", location.state);
  return (
    <div>
      <h1 className="text-center mt-3">تأكيد اشتراك {course.title}</h1>
      <div className="row  mt-3">
        {courses.map((e, key) => {
          return (
            <div className="col my-3">
              <div className="row">
                <div className="col-3 rounded-circle">
                  <img
                    width={"200px"}
                    height={"200px"}
                    src={course.img}
                    className="  object-fit-cover m-3"
                    alt="..."
                  />
                </div>
                <div className="col">
                  <div className="card-body">
                    <h5 className="card-title fs-4 fw-bold mb-3">
                      {course.title}
                    </h5>
                    <p className="card-text mb-3">{course.desc}</p>
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
                            {course.location}
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
                            {course.no_of_lec}
                          </span>
                        </div>
                      </div>
                      <div className="col-auto">
                        <div className="input-group mb-3 ">
                          <span
                            class="input-group-text rounded-0 rounded-end"
                            style={{ background: "#eee" }}
                          >
                            <RiMoneyPoundCircleFill className="ms-2" /> السعر
                          </span>

                          <span class="input-group-text rounded-0 rounded-start bg-white">
                            {course.price}
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
                            {course.no_of_hours}
                          </span>
                        </div>
                      </div>
                    </div>
                    <a href="/successful" className="btn btn-danger">
                      تأكيد الاشتراك
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Subscribe;
