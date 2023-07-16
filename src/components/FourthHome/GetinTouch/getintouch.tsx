import React, { useState } from "react";
import "./getintouch.css";
import Yoga from "../../../assets/yogepose.png";
import { CommonButton } from "../../../Common/Button/button";

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    mobile: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
    mobile: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (validateForm()) {
      // Submit form data
    }
  };

  const validateForm = () => {
    let isValid = true;
    const { name, email, message, mobile } = formData;
    const newErrors = { name: "", email: "", message: "", mobile: "" };

    if (!name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
      isValid = false;
    }

    if (!message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    if (!mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
      isValid = false;
    } else if (!/^\d{10}$/.test(mobile)) {
      newErrors.mobile = "Mobile number is invalid";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  return (
    <div className="getintouch-container">
      <div className="getintouch-image">
        <img src={Yoga} />
      </div>
      <div className="getintouch-form">
        <div className="form-container">
          <h1>GET IN TOUCH</h1>
          <form onSubmit={handleSubmit}>
            <section style={{ width: "100%" }}>
              <input
                className={
                  errors.name ? "error-message-classname" : "names-input-boxes"
                }
                type="text"
                placeholder="enter your name..."
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </section>
            {errors.name && (
              <span className="error-message">{errors.name}</span>
            )}
            <section>
              <input
                className={
                  errors.name ? "error-message-classname" : "names-input-boxes"
                }
                placeholder="email"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </section>{" "}
            {errors.email && (
              <span className="error-message">{errors.email}</span>
            )}
            <section>
              <input
                className={
                  errors.name ? "error-message-classname" : "names-input-boxes"
                }
                type="text"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="enter your mobile no..."
              />
            </section>{" "}
            {errors.mobile && (
              <span className="error-message">{errors.mobile}</span>
            )}
            <section>
              <textarea
                className={
                  errors.name ? "error-message-classname" : "names-input-boxes-textarea"
                }
                rows={3}
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="enter your message..."
              ></textarea>
            </section>
            {errors.message && (
              <span className="error-message">{errors.message}</span>
            )}
            <section className="mmmmm">
              <CommonButton style={{ width: "100px" }} type="Submit">
                Send
              </CommonButton>
            </section>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
