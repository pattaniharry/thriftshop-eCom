import React from "react";
import { interSM } from "../components/HeroSection";

function page() {
  return (
    <div>
      <div className="main">
        <div className="container">
          <div className="section-header text-center">
            <h1 className="text-green pt-[150px] ">Contact Us</h1>
            <p className="text-[#717171] pt-[15px] mb-[50px]">
              Any question or remarks? Just write us a message!
            </p>
          </div>

          <div className="section-body ">
            <div className="form-section flex justify-center bg-white">
              <div className="contact-info bg-black text-white max-w-[491px] relative overflow-hidden rounded-[30px]">
                <div className="contact-us-text-box pl-[40px] pt-[40px]">
                  <div className="w-[138px] h-[138px] bg-[#484848] opacity-50 rounded-full absolute bottom-[70px] right-[70px]"></div>
                  <div className="w-[269px] h-[269px] bg-[#484848] opacity-50 rounded-full  bottom-[-70px] right-[-70px] absolute"></div>
                  <div className="contact-us-head">
                    <h2>Contact Information</h2>
                    <p className="pt-[6px]">
                      Say something to start a live chat{" "}
                    </p>
                  </div>
                  <div className="contact-us-info pt-[111px] pb-[159px]">
                    <div className="contact-us-info-phone pb-[50px] flex mr-[25px]">
                      <img src="/images/phone.svg" alt="" />
                      <p>+1012 3456 789</p>
                    </div>
                    <div className="contact-us-info-email pb-[50px] flex mr-[25px]">
                      <img src="/images/email.svg" alt="" />
                      <p>demo@gmail.com</p>
                    </div>
                    <div className="contact-us-info-address flex mr-[25px] ">
                      <img src="/images/location.svg" alt="" />
                      <p>47/29 plot no , Bedi chowkdi , rajkot , 360007</p>
                    </div>
                  </div>
                </div>
                <div className="contact-social-links flex gap-4 pb-[36px] items-center  ">
                  <img src="/images/twitter.svg" alt="" />
                  <img src="/images/insta_icon_contactus.svg" alt="" />
                  <img src="/images/discord.svg" alt="" />
                </div>
              </div>
              <div className="contact-form bg-white relative overflow-hidden">
                <img
                  src="/images/plane.png "
                  className="absolute bottom-[-70px] right-[50px]"
                  alt=""
                />
                <div className="contact-form-text-box pl-[50px] pt-[60px] pr-[67px] ">
                  <div className="your-info grid grid-rows-2 grid-cols-2 gap-[38px] mb-[45px]">
                    <div className="firstname">
                      <label className="flex flex-col">
                        First Name
                        <input
                          type="text"
                          className="border-b-1 max-w-[278px] pl-[5px]"
                        />
                      </label>
                    </div>
                    <div className="lastname">
                      <label className="flex flex-col">
                        Last Name
                        <input
                          type="text"
                          className="border-b-1 max-w-[278px] pl-[5px]"
                        />
                      </label>
                    </div>
                    <div className="email-contact">
                      <label className="flex flex-col">
                        Email
                        <input
                          type="email"
                          className="border-b-1 max-w-[278px] pl-[5px]"
                        />
                      </label>
                    </div>
                    <div className="phoneNumber">
                      <label className="flex flex-col">
                        Phone Number
                        <input
                          type="number"
                          className="border-b-1 max-w-[278px] pl-[5px]"
                        />
                      </label>
                    </div>
                  </div>
                  <div className="query-type">
                    <h6
                      className={`text-bold text-[14px] ${interSM.className}  font-[550]`}
                    >
                      Select Subject ?
                    </h6>
                    <div className="query-type-radio pt-[15px]">
                      <label className="inline-flex items-center space-x-2 ml-[10px]">
                        <input
                          type="radio"
                          name="example"
                          value="option1"
                          // checked={selectedOption === "option1"}
                          // onChange={handleChange}
                          className="form-radio text-blue-600"
                        />
                        <span>Option 1</span>
                      </label>
                      <label className="inline-flex items-center space-x-2 ml-[10px]">
                        <input
                          type="radio"
                          name="example"
                          value="option1"
                          // checked={selectedOption === "option1"}
                          // onChange={handleChange}
                          className="form-radio text-blue-600"
                        />
                        <span>Option 2</span>
                      </label>
                      <label className="inline-flex items-center space-x-2 ml-[10px]">
                        <input
                          type="radio"
                          name="example"
                          value="option1"
                          // checked={selectedOption === "option1"}
                          // onChange={handleChange}
                          className="form-radio text-blue-600"
                        />
                        <span>Option 3</span>
                      </label>
                      <label className="inline-flex items-center space-x-2 ml-[10px]">
                        <input
                          type="radio"
                          name="example"
                          value="option1"
                          // checked={selectedOption === "option1"}
                          // onChange={handleChange}
                          className="form-radio text-blue-600"
                        />
                        <span>Option 4</span>
                      </label>
                    </div>
                  </div>
                  <div className="query-msg mt-[45px]">
                    <p>message</p>
                    <input
                      type="text "
                      className="border-b-1  pl-[5px] w-[100%]"
                    />
                    <button className="primary-btn-black mt-[50px] ml-[200px]">
                      {" "}
                      Send message
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="maps mt-[50px] m-auto max-w-[600px]">
              <h5 className="text-center text-[20px] pb-[20px] ">
                Our Location
              </h5>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.7131559631853!2d70.9143287110829!3d22.326685541853326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959b15045c682c5%3A0x48faf13c20f2ba14!2sTarghadia%2C%20Gujarat%20360023!5e0!3m2!1sen!2sin!4v1749208427535!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
