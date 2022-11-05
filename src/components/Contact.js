import React from "react";

const Contact = () => {
  return (
    <>
      <div className="container contact  p-5">
        <div className="w-100">
          <form action="">
            <h1>Contact Me</h1>
            <p>Hi there, contact me to ask about anything</p>
            <div className="row">
            <div className="mb-3 col-12 col-md-6">
              <label htmlFor="first_name">First Name</label>
              <input
                className="form-control"
                type="text"
                id="first_name"
                placeholder="Enter your first name"
              />
            </div>
            <div className="mb-3 col-12 col-md-6">
              <label htmlFor="last_name">Last Name</label>
              <input
                className="form-control"
                type="text"
                id="last_name"
                placeholder="Enter your last name"
              />
            </div>
            </div>
            <div className="mb-3">
              <label htmlFor="email">Email</label>
              <input
                className="form-control"
                type="email"
                id="email"
                placeholder="Email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                placeholder="Send me a message and I'll reply you as soon as possible"
                id="message"
                className="form-control"
                rows="5" required
              ></textarea>
              <small>Please enter a message</small>
            </div>
            <div className="mb-3 form-check form-check-inline">
              <input
                className="form-check-input me-2"
                type="checkbox"
                id="email"
                placeholder="Email"
              />
              <label htmlFor="email">
                You agree to providing data to AdebisiRex who may contact you
              </label>
            </div>
            <button className="btn btn-lg form-control btn-primary">
              {" "}
              Send message
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
