const Contact =()=>{
    return(
        <>
         <section className="team" >
                <h1 className="heading">our <span>team</span></h1>

                <div className="box-containr">

                    <div className="bo">

                        <div className="image">
                            <img src="/baker2.jpg"/>
                        </div>

                        <div className="conten">
                            <h3>erica lacy</h3>
                            <p>CEO</p>
                            
                            <div className="share">
                                <i className="fab fa-facebook-f"></i>
                                <i className="fa-regular fa-envelope"></i>
                                <i className="fab fa-instagram"></i>


                            </div>

                        </div>
                    </div>
                    <div className="bo">

                        <div className="image">
                            <img src="/baker1.jpg"/>
                        </div>

                        <div className="conten">
                            <h3>hardly quee</h3>
                            <p>head-baker</p>
                            
                            <div className="share">
                                <i className="fab fa-facebook-f"></i>
                                <i className="fa-regular fa-envelope"></i>
                                <i className="fab fa-instagram"></i>


                            </div>

                        </div>
                    </div>
                    <div className="bo">

                        <div className="image">
                            <img src="/baker3.jpg"/>
                        </div>

                        <div className="conten">
                            <h3>nick mark</h3>
                            <p>manager</p>
                            
                            <div className="share">
                                <i className="fab fa-facebook-f"></i>
                             <i className="fa-regular fa-envelope"></i> 
                                <i className="fab fa-instagram"></i>


                            </div>

                        </div>
                    </div>
                    

                </div>
            </section>
            <section className="parallax">
                <h1 className="heading">range of <span>product</span></h1>
                <div className="box-container">
                    <div className="box">
                        <div className="image">
                            <img src="cakelogo.jpg"/>
                        </div>
                    <div className="content">
                        <h3>cake</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        autem laboriosam consequuntur repellat aperiam cupiditate atque saepe incidunt deserunt, 
                            totam impedit delectus,natus tempore commodi et beatae reprehenderit magnam.</p>
                    </div>
                </div>
                    <div className="box">
                        <div className="image">
                            <img src="/parallax.jpg"/>
                        </div>
                    <div className="content">
                        <h3>bread</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        autem laboriosam consequuntur repellat aperiam cupiditate atque saepe incidunt deserunt, 
                            totam impedit delectus,natus tempore commodi et beatae reprehenderit magnam.</p>
                    </div>
                </div>
                    <div className="box">
                        <div className="image">
                            <img src="/donotlogo"/>
                        </div>
                    <div className="content">
                        <h3>donut</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        autem laboriosam consequuntur repellat aperiam cupiditate atque saepe incidunt deserunt, 
                            totam impedit delectus,natus tempore commodi et beatae reprehenderit magnam.</p>
                    </div>
                </div>


                </div>
             </section>
             <section className="review">
                <h1 className="heading">what our <span>customers</span> say</h1>
                <div className="box-container">

                    <div className="box">
                        <img src="/review1.png"  className="user" alt=""/>
                        <h3>lacy deo</h3>
                        <div className="stars">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>

                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores nostrum voluptas enim 
                            accusamus sequi suscipit odio aspernatur ipsum atque. 
                            Natus necessitatibus sequi vitae et fugit libero officia dolorem pariatur consequatur!</p>

                    </div>
                    <div className="box">
                        <img src="/review2.jpg"  className="user" alt=""/>
                        <h3>lacy deo</h3>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>

                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores nostrum voluptas enim 
                            accusamus sequi suscipit odio aspernatur ipsum atque. 
                            Natus necessitatibus sequi vitae et fugit libero officia dolorem pariatur consequatur!</p>

                    </div>
                    {/* <div className="box">
                        <img src="/review3.jpg"  className="user" alt=""/>
                        <h3>lacy deo</h3>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>

                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores nostrum voluptas enim 
                            accusamus sequi suscipit odio aspernatur ipsum atque. 
                            Natus necessitatibus sequi vitae et fugit libero officia dolorem pariatur consequatur!</p>

                    </div>
                </div> */}
                </div>

              </section>
  </>
    )
}
export default Contact