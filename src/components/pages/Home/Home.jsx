import Carousels from '../../Carousel/Carousels';
import "../Home/Home.css"

const Home = () => {
  const buttonStyle = {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };
  return (
    <>
        <div>  
              <div>
                  <div>
                      <Carousels  className="carousel" />
                  </div>
            
                {/* <div className='img'>
                <img src="/images/Teacher.png" alt="Girl in a jacket" width="500" height="600" /> 
                </div> */}
                
              </div>    
          
        </div>  

        <div className='prop'>
            <div className='intro-word'>
              <h4>Proprietress Talk</h4>
              <h3>Education is the most powerful weapon</h3>            
              <p>Our richly blessed Mountain Top Schools waxing stronger and stronger in academics, extra-curricular activites and the general wellbeing of our pupils. 
               Efforts and commitments of our teachers and pupils towards acheiving all round outstading success is extraordinary.
               We are rest assured that wherever opportunites open up for them, they will excel, as they have th epotentials to rise above their fellows.</p>
            </div>
            <div className='prop-image'>
              <img src={"./images/Gallery/proprietress.jpg"} alt="Propietress picture" />
            </div>
        </div>

        <div></div>

          
          {/* <div className='head'>
            <h1>We have faith in our student future</h1>
            <p>Our students are talented, hard-working and ufll of good ideas. We encourage and empower them to bring their ideas to life. Hands-on opporutnities are what we're all about</p>
          </div>
       */}
          <div>
            <h1></h1>
            <p></p>
          </div>

          {/* <div className='medal-section'>
              <img  className='medal-img' src={"./images/medal.png"} alt="medal" />
              <h1>Our students are talented,</h1>
              <p>passionate, hard-working and full of good ideas</p>
              <Button style={buttonStyle} >Learn More</Button>
          </div> */}

           <div className='academic section'>
              <h4 className='calendar-section'>Academic Calendar</h4>
              <div className='academic-text'>
                    <p>Stay informed about important dates and events throughout the school year with our Academic Calendar,</p>
                    <p> ensuring you never miss a moment of academic and extracurricular excellence.</p>
              </div>    

              <div>
                <div className='calendar-container'>
                  <div className="month">
                        <ul>
                          <li>February</li>
                        </ul>
                  </div>
                  <ul className="weekdays">
                    <li>Mo</li>
                    <li>Tu</li>
                    <li>We</li>
                    <li>Th</li>
                    <li>Fr</li>
                    <li>Sa</li>
                    <li>Su</li>
                  </ul>

                  <ul className="days">
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li><span className='active'>5</span></li>
                    <li><span className='active'>6</span></li>
                    <li><span className='active'>7</span></li>
                    <li><span className='active'>8</span></li>
                    <li><span className='active'>9</span></li>
                    <li><span >10</span></li>
                    <li>11</li>
                    <li>12</li>
                    <li><span className='active'>13</span></li>
                    <li><span className='active'>14</span></li>
                    <li><span className='active'>15</span></li>
                    <li><span className='active'>16</span></li>
                    <li>17</li>
                    <li>18</li>
                    <li><span className='active'>19</span></li>
                    <li><span className='active'>20</span></li>
                    <li>21</li>
                    <li>22</li>
                    <li>23</li>
                    <li>24</li>
                    <li>25</li>
                    <li><span className='active'>26</span></li>
                    <li><span className='active'>27</span></li>
                    <li><span className='active'>28</span></li>
                    <li><span className='active'>29</span></li>
                    <li><span className='active'>30</span></li>
                    <li><span className='active'>31</span></li>
                  </ul>
                </div>          
          </div>
        <section className='testimonial'>
          <div>
            <h1 className='testimonial-heading'>Testimonials</h1>
            <div>
              <article>
                <div>
                  <p> Mountain Top is home away from home for my kids.The Teachers are so amazing and the learning environment is second to none</p>
                  <h3 className='testimonial-heading'>Parents</h3>
                </div>
              </article>
              <article>
                <div>
                  <p> As an alumni of Mountain Top School, I can confidently say that the education and values instilled in me during my time here have had a lasting impact on my life. The rigorous academic curriculum prepared me well for higher education and beyond, while the emphasis on community service and leadership helped shape me into a responsible and compassionate individual. I'm proud to be a graduate of such a distinguished institution </p>
                  <h3 className='testimonial-heading'>Students</h3>
                </div>
              </article>
              <article>
                <div>
                  <p> I've attended Mountain Top School for several years now, and it truly feels like a second home to me. The diverse range of extracurricular activities, from sports to arts and beyond, has allowed me to explore my interests and develop new skills. The teachers go above and beyond to ensure we succeed, and the friendships I've made here will last a lifetime </p>
                  <h3 className='testimonial-heading'>Students</h3>
                </div>
              </article>
            </div>
          </div>
        </section>
      </div> 
    </>
  );
}

export default Home;