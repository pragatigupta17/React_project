const Contact = () =>{
    return(
        <>
        
        <section className="order" id="order">
      <h1 className="heading"><span>order</span>now</h1>
      <div className="do">
        <img src="ordernow.png" alt="" className="doll" />

        <div className="form-container">
          <h2>Order Now</h2>
          <form action="#" method="post">
            <div className="form-group">
              <label for="name">Full Name:</label>
              <input type="text" id="name" name="name" required />
            </div>

            <div className="form-group">
              <label for="email">Email Address:</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div className="form-group">
              <label for="phone">Phone Number:</label>
              <input type="tel" id="phone" name="phone" required />
            </div>

            <div className="form-group">
              <label for="order">Address:</label>
              <textarea id="order" name="order" rows="2" required></textarea>
            </div>

            <div className="form-group">
              <label for="date">Pickup Date:</label>
              <input type="date" id="date" name="date" required />
            </div>

            <div className="form-group">
              <label for="time">Pickup Time:</label>
              <input type="time" id="time" name="time" required />
            </div>

            <div className="form-group">
              <label for="special-requests">Special Requests:</label>
              <textarea
                id="special-requests"
                name="special-requests"
                rows="3"
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
    )
}

export default Contact