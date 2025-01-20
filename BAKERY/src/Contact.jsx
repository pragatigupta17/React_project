import axios from "axios";
import React from "react";
import { useState } from "react";

const Contact = () => {
  let [frminp, setfrminp] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    order_date: "",
    order_time: "",
    status: "",
  });
  const changeinp = (e) => {
    let { name, value } = e.target;
    setfrminp({ ...frminp, [name]: value });
    console.log(frminp);
  };
  const Submitfrom = (e) => {
    e.preventDefault();
    console.log(frminp);
    axios
      .post("http://localhost:3000/form", frminp)
      .then(res => alert("inserted"));
  };
  return (
    <>
      <section className="order" id="order">
        <h1 className="heading">
          <span>order</span>now
        </h1>
        <div className="do">
          <img src="ordernow.png" alt="" className="doll" />

          <div className="form-container">
            <h2>Order Now</h2>
            <form onSubmit={Submitfrom}>
              <div className="form-group">
                <label>Full Name:</label>
                <input
                  type="text"
                  name="name"
                  value={frminp.name}
                  onChange={changeinp}
                />
              </div>

              <div className="form-group">
                <label>Email Address:</label>
                <input
                  type="text"
                  name="email"
                  value={frminp.email}
                  onChange={changeinp}
                />
              </div>

              <div className="form-group">
                <label>Phone Number:</label>
                <input
                  type="text"
                  name="phone"
                  value={frminp.phone}
                  onChange={changeinp}
                />
              </div>

              <div className="form-group">
                <label>Address:</label>
                <textarea
                  name="address"
                  rows="2"
                  value={frminp.address}
                  onChange={changeinp}
                ></textarea>
              </div>

              <div className="form-group">
                <label>Pickup Date:</label>
                <input
                  type="date"
                  name="order_date"
                  value={frminp.order_date}
                  onChange={changeinp}
                />
              </div>

              <div className="form-group">
                <label>Pickup Time:</label>
                <input
                  type="time"
                  name="order_time"
                  value={frminp.order_time}
                  onChange={changeinp}
                />
              </div>

              <div className="form-group">
                <label>Special Requests:</label>
                <textarea
                  name="status"
                  rows="3"
                  value={frminp.status}
                  onChange={changeinp}
                ></textarea>
              </div>

              <div className="form-group">
                <button type="submit">Place Order</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
