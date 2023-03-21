import React from "react";
import { ImLocation, ImClock, ImClock2 } from "react-icons/im";
import { RiMoneyPoundCircleFill } from "react-icons/ri";
import { MdPlayLesson } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const CourseList = () => {
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
    {
      title: "كورس HR",
      desc: "تقدم الدورة فهماً شاملاً لمبادئ الموارد البشرية ووظائفها ، وكذلك واجبات قسم شؤون الموظفين ، وسيقوم المتدرب بتعليم المتدربين كيفية تنفيذ السياسات والإجراءات التنفيذية لإدارة جميع شؤون الموظفين وبعد ذلك كيفية إنشاء إدارة الرواتب والضوابط الفعالة مع التركيز القوي على التطبيق العملي في بيئة العمل ، أخيرًا ، سيعرف المتدرب كيفية إنشاء ورقة إكسل احترافية لتنفيذ أعمالهم وعمل المعادلات والجداول المحورية.",
      price: 3000,
      no_of_lec: 30,
      location: "مقر الشركة | اونلاين",
      no_of_hours: 100,
      img: "https://www.simplilearn.com/ice9/free_resources_article_thumb/Top_10_HR_Concepts_And_Terms.jpg",
    },
    {
      title: "ورشة عمل التدريب والتطوير",
      desc: "  من خلال هذه الدورة ، سيتعرف المتدرب على الفرق بين التدريب والتطوير ، ويعرف فوائد التدريب والتطوير ، ثم كيفية تصميم خطة تدريب فعالة من خلال إجراء تقييم الاحتياجات التدريبية TNA لقياس وتقييم نتائج التدريب. أخيرًا ، كيفية قياس العائد على الاستثمار من التدريب - عائد الاستثمار.",
      price: 500,
      no_of_lec: 1,
      location: "مقر الشركة | اونلاين",
      no_of_hours: 6,
      img: "http://smgeg.com/template/img/course/55945012-b7cd-4290-8b20-3ac80f16ec40.jpg",
    },
  ];
  const navigate = useNavigate();
  return (
    <div className="">
      <div className="fs-3 fw-bold mt-3">كورسات عامة</div>

      <div className="row row-cols-1 mt-3">
        {courses.map((e, key) => {
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
                              <RiMoneyPoundCircleFill className="ms-2" /> السعر
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
                        className="btn btn-danger"
                        onClick={() => {
                          navigate("/subscribe", { state: e });
                        }}
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
