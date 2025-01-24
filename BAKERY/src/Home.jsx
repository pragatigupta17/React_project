import {Link,useNavigate} from "react-router-dom";
const Home =()=>{
let Nav = useNavigate();
function goToSignup(){
    Nav("/signup")
}

    return(
        <>
            {/* <h1>HOME PAGE</h1> */}
            <section className="home" id="home">
        <div className="content">
            <h1>we bake the world a better place</h1>
            <h1><span>on door bakers</span></h1>
           <h1>super delicious and fresh baked goods</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, blanditiis corporis! Est repellat minima earum asperiores quod quam, placeat qui.</p>
           <a href="#" className="btn" onClick={goToSignup}>get started</a>
        </div>
 </section> 
      <section className="about" >
        <h1 className="heading"><span>about</span>us</h1>
        <div className="row">
            <div className="image">
                <img src="/dubai.jpeg" alt=""/>
            </div>
            <div className="content">
                <h3>good things come to those <span>who bake</span> for others</h3>
                <h3>we are <span> baking </span>for<span> you..!!</span></h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Reiciendis facilis voluptatem quidem quas eum eligendi! Non, 
                    cumque minima placeat officiis doloremque fugit beatae quidem,
                     ullam nobis consequuntur, assumenda mollitia fugiat.
                     <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, nulla?</span></p>
                     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, reprehenderit nulla. Aspernatur, at consectetur explicabo et consequuntur debitis ipsa vitae.</p>
                     <a href="#" className="btn" onClick={goToSignup}>read more</a>
            </div>
        </div>
      </section>

        <section className="product">
        <h1 className="heading">our<span>product</span></h1>
        <div className="box-container">
            <div class="box">
                <div class="image">
                    <img src="/icecream.jpg" alt=""/>
                </div>
                <div className="content">
                    <h3>ice cream</h3>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>

                    </div>
                    <span className="price">$60.99</span>
                    <a href="#" className="btn" onClick={goToSignup}>add to cart</a>
                </div>
            </div>
            <div className="box">
                <div className="image">
                    <img src="/mousecake.webp" alt=""/>
                </div>
                <div className="content">
                    <h3>mousecake</h3>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>

                    </div>
                    <span className="price">$50.99</span>
                    <a href="#" className="btn"onClick={goToSignup}>add to cart</a>
                </div>
            </div>
            <div className="box">
                <div className="image">
                    <img src="/cake2.webp" alt=""/>
                </div>
                <div className="content">
                    <h3>cake</h3>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>

                    </div>
                    <span className="price">$50.99</span>
                    <a href="#" className="btn"onClick={goToSignup}>add to cart</a>
                </div>
            </div>
            <div className="box">
                <div className="image">
                    <img src="/chocolate.jpg" alt=""/>
                </div>
                <div className="content">
                    <h3>dark chocolates</h3>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>

                    </div>
                    <span className="price">$50.99</span>
                    <a href="#" className="btn" onClick={goToSignup}>add to cart</a>
                </div>
            </div>
            <div className="box">
                <div className="image">
                    <img src="/puff.webp" alt=""/>
                </div>
                <div className="content">
                    <h3>puffs</h3>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>

                    </div>
                    <span className="price">$50.99</span>
                    <a href="#" className="btn" onClick={goToSignup}>add to cart</a>
                </div>
            </div>
            <div className="box">
                <div className="image">
                    <img src="/shakes.webp" alt=""/>
                </div>
                <div className="content">
                    <h3>shake</h3>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>

                    </div>
                    <span className="price">$70.99</span>
                    <a href="#" className="btn" onClick={goToSignup}>add to cart</a>
                </div>
            </div>
            <div className="box">
                <div className="image">
                    <img src="/fruitstuff.jpeg" alt=""/>
                </div>
                <div className="content">
                    <h3>fruitstuff</h3>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>

                    </div>
                    <span className="price">$60.99</span>
                    <a href="#" className="btn" onClick={goToSignup}>add to cart</a>
                </div>
            </div>
            <div className="box">
                <div className="image">
                    <img src="/pastry.webp" alt=""/>
                </div>
                <div className="content">
                    <h3>pastry</h3>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>

                    </div>
                    <span className="price">$60.99</span>
                    <a href="#" className="btn" onClick={goToSignup}>add to cart</a>
                </div>
            </div>
            <div className="box">
                <div className="image">
                    <img src="/cocktel2.jpeg" alt=""/>
                </div>
                <div className="content">
                    <h3>drinks</h3>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>

                    </div>
                    <span className="price">$60.99</span>
                    <a href="#" className="btn" onClick={goToSignup}>add to cart</a>
                </div>
            </div>
            <div className="box">
                <div className="image">
                    <img src="/chocolates.jpg" alt=""/>
                </div>
                <div className="content">
                    <h3>chocolates</h3>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>

                    </div>
                    <span className="price">$60.99</span>
                    <a href="#" className="btn"onClick={goToSignup}>add to cart</a>
                </div>
            </div>
            <div className="box">
                <div className="image">
                    <img src="/cake4.webp" alt=""/>
                </div>
                <div className="content">
                    <h3>bd cakes</h3>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>

                    </div>
                    <span className="price">$60.99</span>
                    <a href="#" className="btn"onClick={goToSignup}>add to cart</a>
                </div>
            </div>
            <div className="box">
                <div className="image">
                    <img src="/coffee.jpeg" alt=""/>
                </div>
                <div className="content">
                    <h3>coffe</h3>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>

                    </div>
                    <span className="price">$60.99</span>
                    <a href="#" className="btn" onClick={goToSignup}>add to cart</a>
                </div>
            </div>
        </div>
       </section>
       <section className="promotion">
                <h1 className="heading">weekly<span> promotions </span></h1>
                <h1 className="heading">Customer <span>satisfaction</span> is our <span>happiness</span></h1>
                <div className="box-container">

                    <div className="box">
                        <div className="content">
                            <h1>baby birthday cake</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Sed aut non sequi? Hic, quod at? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                 Inventore, officiis?</p>
                        </div>
                        <img src="/babycake.webp" alt=""/>
                    </div>

                    <div className="box">
                        <div className="content">
                            <h1>fruit cake</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Sed aut non sequi? Hic, quod at? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                 Inventore, officiis?</p>
                        </div>
                        <img src="/cake3.jpeg" alt=""/>
                    </div>

                    
                    

                </div>
            </section>
       
        </>
        

    )
}
export default Home
