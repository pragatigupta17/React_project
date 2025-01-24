import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
const Details = () => {
  let [jsondata, setData] = useState([]);
  let [frmvisible, setfrmvisible] = useState(false);
  let [edition, setEdition] = useState({});
  const hinput = (e) => {
    let { name, value } = e.target;
    setEdition({ ...edition, [name]: value });
  };
  const finalsubmit = (e) => {
    // e.preventDefault();
    axios
      .post(`http://localhost:3000/form/${edition.id}`, edition)
      .then((r) => alert("inserted"));
  };

  const mydel = (id) => {
    axios
      .delete(`http://localhost:3000/form/${id}`)
      .then((res) => alert("deleted"));
  };

  useEffect(() => {
    axios.get("http://localhost:3000/form").then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, [mydel, finalsubmit]);
  return (
    <>
      <table className="tab">
        <thead className="table-data">
          <th>ID</th>
          <th>NAME</th>
          <th>E-MAIL</th>
          <th>NUMBER</th>
          <th>ADDRESS</th>
          <th>PICKUP-TIME</th>
          <th>PICKUP-DATE</th>
          <th>REQUEST</th>
          <th>EDIT</th>
          <th>DELETE</th>
        </thead>

        <tbody>
          {jsondata.map((e, index) => {
            return (
              <tr key={index} className="data">
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>{e.phone}</td>
                <td>{e.address}</td>
                <td>{e.order_date}</td>
                <td>{e.order_time}</td>
                <td>{e.status}</td>
                <td>
                  <button
                    onClick={() => {
                      setfrmvisible(!frmvisible), setEdition(e);
                    }}
                    className="but"
                  >
                    EDIT
                  </button>
                </td>
                <td>
                  <button onClick={() => mydel(e.id)} className="but">
                    DELETE
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <br />
      <br />
      {frmvisible && (
        <div className="form-container" onSubmit={finalsubmit}>
          <h2>Order Now</h2>
          <form action="#" method="post">
            <div className="form-group">
              <label for="name">Full Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={edition.name}
                onChange={hinput}
              />
            </div>

            <div className="form-group">
              <label for="email">Email Address:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={edition.email}
                onChange={hinput}
              />
            </div>

            <div className="form-group">
              <label for="phone">Phone Number:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={edition.phone}
                onChange={hinput}
              />
            </div>

            <div className="form-group">
              <label for="order">Address:</label>
              <textarea
                id="order"
                name="address"
                rows="2"
                value={edition.address}
                onChange={hinput}
              ></textarea>
            </div>

            <div className="form-group">
              <label for="date">Pickup Date:</label>
              <input
                type="date"
                id="date"
                name="date"
                value={edition.date}
                onChange={hinput}
              />
            </div>

            <div className="form-group">
              <label for="time">Pickup Time:</label>
              <input
                type="time"
                id="time"
                name="time"
                value={edition.time}
                onChange={hinput}
              />
            </div>

            <div className="form-group">
              <label for="special-requests">Special Requests:</label>
              <textarea
                id="special-requests"
                name="special-requests"
                rows="3"
                value={edition.request}
                onChange={hinput}
              ></textarea>
            </div>

            <div className="form-group">
              <button type="submit">Place Order</button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};
export default Details;
