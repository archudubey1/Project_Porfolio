import { FaArrowUp } from "react-icons/fa";

import styled from "styled-components";
import React, { useEffect, useState } from "react";




const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHidden = 20;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);



  return (
    <>
      <div className=''>

        <div className='container-fluid  image'>
          {/* <div className='row'><Navbar /></div> */}

          <div className='row p-5 main-cont'>
            <div className='col-md-12 text-light'>
              <p className=''>FREELENCE CONTENT CREATOR</p>
              <div class="text  mt-4">
                <h1 className='ani'>
                  <span className='text-light'>I am a</span>
                  <div class="message">
                    <div class="word1">Designer </div>
                    <div class="word2">Coder</div>
                    <div class="word3">Developer</div>
                  </div>
                </h1>
              </div>
              <h1 className='intro'>Hello, I'm <span>Archana</span>, Welcome  <br />my World.</h1>
            </div>
          </div>
        </div>
        {/* ============================================About section==================== */}


        <section id="about" class="about main-cont pt-4 p-5">
          {/* <div class="container" data-aos="fade-up"> */}

          {/* <div class="section-title text-start">
              <h2 className='text-center '>About</h2>
              <p className=''>Hello there! I'm dedicated to transforming online platforms through the power of compelling content. Are you feeling disheartened by low blog traffic or seeking ways to optimize revenue from your blog? Look no further! My expertise lies in conducting thorough SEO research to pinpoint topics that not only rank well but also resonate deeply with your audience. I specialize in crafting exceptional, engaging content precisely designed for your blog or website, ensuring it stands out amidst the digital noise. Let's co
                llaborate to revitalize your blog's traffic, maximize its revenue potential, and establish an online presence that captivates and converts.
                Your platform's success story starts here. Thank you for considering me as your content partner in this exciting journey!
              </p>
              <p><span className='fw-bold text-start'> Enhanced Traffic Strategies:</span> Revitalize your blog's traffic to reach its fullest potential.

              </p>

              <p> <span className='fw-bold '>SEO Research Expertise:</span> Thorough research to identify topics that rank well and resonate with your audience.</p>
              <p> <span className='fw-bold '> Monetization Optimization:</span> Strategize to amplify revenue streams from your blog.</p>
              <p><span className='fw-bold '>Top-notch Content Creation:</span> Crafting excellent, engaging content tailored specifically for your blog or website.</p>


            </div> */}
          <div class="section-title">
            <h2 className='text-center fw-bold pb-4'>About</h2>
          </div>

          <div class="row">
            <div class="col-lg-4">
              <img src="/Images/about3.jpg" class="img-fluid" alt="" />

            </div>
            <div class="col-lg-8 pt-4 pt-lg-0 content">
              <h3>Full Stack Developer | UI/UX Designer</h3>
              <p class="fst-italic">
                Am here to work with you on content and other related stuff.

                Feeling that the traffic on your blog is low?
                Feeling that you are not making the most of your blog in terms of revenue?
                Need SEO research to be done to choose rankable topics for your website?
                Need excellent content for your blog or website?

                Then I can help you for sure. Thanks.
              </p>
              <div class="row">

                <div class="col-lg-6">
                  <ul>
                    <li><i class="bi bi-rounded-right"></i> <strong>Birthday:</strong> 03 November 1996</li>
                    <li><i class="bi bi-rounded-right"></i> <strong>Website:</strong> imarchana2015@gmail.com</li>
                    <li><i class="bi bi-rounded-right"></i> <strong>Phone:</strong>  +91 9472308194</li>
                    <li><i class="bi bi-rounded-right"></i> <strong>City:</strong> Noida </li>
                  </ul>
                </div>
                <div class="col-lg-6">
                  <ul>
                    <li><i class="bi bi-rounded-right"></i> <strong>Age:</strong> 26</li>
                    <li><i class="bi bi-rounded-right"></i> <strong>Degree:</strong> MCA(Computer Application)</li>
                    <li><i class="bi bi-rounded-right"></i> <strong>Email:</strong> imarchana2015@gmail.com</li>
                    <li><i class="bi bi-rounded-right"></i> <strong>Freelance:</strong> Available</li>
                  </ul>
                </div>
              </div>
              <p>
                Can help you with keyword research for SEO, outreaching to potential clients and writing excellent SEO optimized content.
                Kindly initiate chat so we can discuss your requirements and deliverables.
                Email: dhanrajmane586@outlook.com  </p>
            </div>
          </div>

          {/* </div> */}
        </section>
        {/* <!-- End About Section --> */}

        {/* =======================================Reviews section======================== */}

        <section className='p-5 main-cont'>
          <div class="section-title">
            <h2 className='text-center fw-bold pb-4'>Reviews</h2>
          </div>


          <div className='row'>
            <div className='col-md-6 mb-3 '>
              <div class="card">
                {/* <img src="./images/review1.png" class="card-img-top" alt="..." height={150} /> */}

              </div>

            </div>
            <div className='col-md-6 mb-3 '>
              <div class="card">
                {/* <img src="./images/review2.png" class="card-img-top" alt="..." height={150} /> */}

              </div>

            </div>
            <div className='col-md-6 mb-3 '>
              <div class="card">
                {/* <img src="./images/review3.png" class="card-img-top" alt="..." height={150} /> */}

              </div>

            </div>
            <div className='col-md-6 mb-3 '>
              <div class="card">
                {/* <img src="./images/review4.png" class="card-img-top" alt="..." height={150} /> */}

              </div>

            </div>
            <div className='col-md-6 mb-3 '>
              <div class="card">
                {/* <img src="./images/review5.png" class="card-img-top" alt="..." height={150} /> */}

              </div>

            </div>
            <div className='col-md-6 mb-3 '>
              <div class="card">
                {/* <img src="./images/review6.png" class="card-img-top" alt="..." height={150} /> */}

              </div>

            </div>




          </div>


        </section>







        {/* <!-- ======= Skills Section ======= --> */}

        {/* <section id="skills" class="skills main-cont pb-4 text-center p-5">
                  <div class="container" data-aos="fade-up">

                      <div class="section-title ">
                          <h2 className='kk'>Skills</h2>
                          <p className=' pt-4'>Experienced in crafting compelling narratives, delivering engaging articles, and providing versatile ghostwriting services across diverse subjects.</p>
                      </div>


                      <div class="row skills-content" >

                          <div class="col-lg-6">

                              <div class="progress">
                                  <span class="skill">Article Writing <i class="val">159</i></span>
                                  <div class="progress-bar-wrap">
                                      <div class="progress-bar" role="progressbar" aria-valuenow="100" style={{ width: '523px' }} aria-valuemin="0" aria-valuemax="100"></div>
                                  </div>
                              </div>



                              <div class="progress">
                                  <span class="skill">Ghostwriting <i class="val">138</i></span>
                                  <div class="progress-bar-wrap">
                                      <div class="progress-bar" style={{ width: '500px' }}></div>
                                  </div>
                              </div>
                              <div class="progress">
                                  <span class="skill">Article Rewriting <i class="val">25</i></span>
                                  <div class="progress-bar-wrap">
                                      <div class="progress-bar" role="progressbar" style={{ width: '125px' }}></div>
                                  </div>
                              </div>
                              <div class="progress">
                                  <span class="skill">Blog <i class="val">12</i></span>
                                  <div class="progress-bar-wrap">
                                      <div class="progress-bar" role="progressbar" style={{ width: '110px' }}></div>
                                  </div>
                              </div>

                          </div>

                          <div class="col-lg-6">
                              <div class="progress">
                                  <span class="skill">Content Writing <i class="val">151</i></span>
                                  <div class="progress-bar-wrap">
                                      <div class="progress-bar" role="progressbar" style={{ width: '515px' }}></div>
                                  </div>
                              </div>

                              <div class="progress">
                                  <span class="skill">English (US) Translator <i class="val">118</i></span>
                                  <div class="progress-bar-wrap">
                                      <div class="progress-bar" style={{ width: '515px' }}></div>
                                  </div>
                              </div>



                              <div class="progress">
                                  <span class="skill">Copywriting <i class="val">24</i></span>
                                  <div class="progress-bar-wrap">
                                      <div class="progress-bar" style={{ width: '500px' }}></div>
                                  </div>
                              </div>

                              <div class="progress">
                                  <span class="skill">Research Writing <i class="val">9</i></span>
                                  <div class="progress-bar-wrap">
                                      <div class="progress-bar" style={{ width: '109px' }}></div>
                                  </div>
                              </div>
                          </div>

                      </div>

                  </div>
              </section> */}
       
        <section className='main-cont p-5'>
          <div className='container-fluid '>
            <div className='row '>
              <div class="section-title ">
                <h2 className='kk '>Skills</h2>
                <p className=' pt-4'>Experienced in crafting compelling narratives, delivering engaging articles, and providing versatile ghostwriting services across diverse subjects.</p>
              </div>
              <div className='col-md-3'>
                <span class="skill d-flex justify-content-center">React JS</span>
                <div class="progress d-flex justify-content-center">

                  <span class="title timer" data-from="0" data-to="85" data-speed="1800">80</span>
                  <div class="overlay"></div>
                  <div class="left"></div>
                  <div class="right"></div>
                </div>


              </div>

              <div className='col-md-3'>
                <span class="skill ms-5">Angular JS</span>
                <div class="progress d-flex justify-content-center">

                  <span class="title timer" data-from="0" data-to="85" data-speed="1800">60</span>
                  <div class="overlay"></div>
                  <div class="left"></div>
                  <div class="right"></div>
                </div>


              </div>
              <div className='col-md-3'>
                <span class="skill ms-5">Java Script</span>
                <div class="progress d-flex justify-content-center">

                  <span class="title timer" data-from="0" data-to="85" data-speed="1800">70</span>
                  <div class="overlay"></div>
                  <div class="left"></div>
                  <div class="right"></div>
                </div>


              </div>
              <div className='col-md-3'>
                <span class="skill ms-5">HTML</span>
                <div class="progress d-flex justify-content-center">

                  <span class="title timer" data-from="0" data-to="85" data-speed="1800">95</span>
                  <div class="overlay"></div>
                  <div class="left"></div>
                  <div class="right"></div>
                </div>


              </div>

              {/* ====== */}

              <div className='col-md-3'>
                <span class="skill ms-5">CSS</span>
                <div class="progress d-flex justify-content-center">

                  <span class="title timer" data-from="0" data-to="85" data-speed="1800">70</span>
                  <div class="overlay"></div>
                  <div class="left"></div>
                  <div class="right"></div>
                </div>


              </div>

              <div className='col-md-3'>
                <span class="skill ms-5">Boostrap</span>
                <div class="progress d-flex justify-content-center">

                  <span class="title timer" data-from="0" data-to="85" data-speed="1800">80</span>
                  <div class="overlay"></div>
                  <div class="left"></div>
                  <div class="right"></div>
                </div>


              </div>
              <div className='col-md-3'>
                <span class="skill ms-5">My SQL</span>
                <div class="progress d-flex justify-content-center">

                  <span class="title timer" data-from="0" data-to="85" data-speed="1800">60</span>
                  <div class="overlay"></div>
                  <div class="left"></div>
                  <div class="right"></div>
                </div>


              </div>
              <div className='col-md-3'>
                <span class="skill ms-5">Figma</span>
                <div class="progress d-flex justify-content-center">

                  <span class="title timer" data-from="0" data-to="85" data-speed="1800">70</span>
                  <div class="overlay"></div>
                  <div class="left"></div>
                  <div class="right"></div>
                </div>


              </div>

            </div>
          </div>

        </section>

        {/* ================================================================================================================== */}
       


        {/* ===========================================================Certificate========================= */}

        <section className='main-cont p-5'>
          <div className='container-fluid '>
            <div className='row '>
              <div class="section-title">
                <h2 className='text-center mb-4 '>Certificates</h2>
              </div>

              <div className='col-md-12 '>
                <p className=' pt-4'>Certificates within my portfolio showcase my commitment to continuous learning and mastery in various fields. Each certificate represents dedicated effort and proficiency attained in specialized areas. They serve as tangible proof of my expertise, validating skills honed through rigorous training and experience. These certifications not only highlight my qualifications but also signify a proactive approach towards personal and professional development. Each certificate stands as a testament to my dedication, knowledge, and ongoing pursuit of excellence.</p>

              </div>
              <div className='d-flex justify-content-center dflexright'>

                <div className='col-md-4 mb-4 pb-4 pt-4'>
                  <div class="card card-c "><img class="img-fluid imag-size img-cls" src="./images/Squarespace (1).png" alt="About Images" />

                    <div class="card-c__content">
                      <p class="card-c__title">Squarespace</p>
                      <p class="card-c__description text-center  card-c__title"> Score: 97%</p>
                    </div>
                  </div>
                </div>
                <div className='col-md-4 mb-4  pb-4 pt-4'>
                  <div class="card card-c "><img class="img-fluid imag-size img-cls" src="./images/Ubersuggest Certificate (1).png" alt="About Images" />

                    <div class="card-c__content">
                      <p class="card-c__title">Ubersuggest Certificate</p>
                      <p class="card-c__description text-center  card-c__title">Score: 85%</p>
                    </div>
                  </div>
                </div>
                <div className='col-md-4 mb-3  pb-4 pt-4'>
                  <div class="card card-c "><img class="img-fluid imag-size img-cls" src="./images/Increase SEO Traffic With WordPress (1).png" alt="About Images" />

                    <div class="card-c__content">
                      <p class="card-c__title">Increase SEO Traffic With WordPress</p>
                      <p class="card-c__description text-center  card-c__title">Score: 85%</p>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </section>


        {/* ============================Projects============== */}

        <section>
          <div className=' container-fluid row p-5 text-center main-cont'>
            <div class="section-title">
              <h2>My Latest Project</h2>
            </div>

            <p>These are some of our recent design projects and we are so excited to show them to you.</p>
            <div className='col-md-4 pt-5'>
              <div class="card card-pp">
                <div className='position-absolute top-50 start-50 translate-middle'>
                  <p class="card-c__title">Business Owner</p>
                  <p class="  ">OTSS (On-Time Service Solutions) streamlines service management for businesses by optimizing scheduling and resource allocation.</p>

                </div>

              </div>
            </div>
            <div className='col-md-4 pt-5'>
              <div class="card card-pp">
                <div className='position-absolute top-50 start-50 translate-middle'>
                  <p class="card-c__title">Marketing And Business Development Manager</p>
                  <p class="  ">I handle marketing and business development aspects for the company.</p>

                </div>

              </div>
            </div>
            <div className='col-md-4 pt-5'>
              <div class="card card-pp">
                <div className='position-absolute top-50 start-50 translate-middle'>
                  <p class="card-c__title">Consultant</p>
                  <p class="  ">Consulted them to increase the revenue of their website on a pro bono basis.</p>

                </div>

              </div>
            </div>
            <div className='col-md-4 pt-5'>
              <div class="card card-pp">
                <div className='position-absolute top-50 start-50 translate-middle'>
                  <p class="card-c__title">Content</p>
                  <p class="  ">Consulted them to increase the revenue of their website on a pro bono basis.</p>

                </div>

              </div>
            </div>
            <div className='col-md-4 pt-5'>
              <div class="card card-pp">
                <div className='position-absolute top-50 start-50 translate-middle'>
                  <p class="card-c__title">Manager</p>
                  <p class="  ">Provided content to several startups and companies besides outsourcing agencies from around the world.</p>

                </div>

              </div>
            </div>

            <div className='col-md-4 pt-5'>
              <div class="card card-pp">
                <div className='position-absolute top-50 start-50 translate-middle'>
                  <p class="card-c__title">Content Strategist</p>
                  <p class="  ">Worked on the SEO strategies for the site besides making sure quality content gets uploaded on the same. As of now it gets more than 80,000 hits per month.</p>

                </div>

              </div>
            </div>
            <div className='col-md-4 pt-5'>
              <div class="card card-pp">
                <div className='position-absolute top-50 start-50 translate-middle'>
                  <p class="card-c__title">Content Manager</p>
                  <p class="  ">Took their blogs to 50k visitors per month. Also made sure that net ROI becomes positive.</p>

                </div>

              </div>
            </div>
            <div className='col-md-4 pt-5'>
              <div class="card card-pp">
                <div className='position-absolute top-50 start-50 translate-middle'>
                  <p class="card-c__title">Content Creator</p>
                  <p class="  ">Created content for YLurn. Worked closely with the founder to make sure marketing worthy and par excellence content gets uploaded on the site.</p>

                </div>

              </div>
            </div>
          </div>
        </section>









        {/* ================================= contact me Hire me============== */}

        <section className='main-cont p-5'>
          <div className='container-fluid '>


            <div className='row '>
              <div class="section-title">
                <h2 className='fw-bold pb-4 text-center mb-4'>Contact Us.</h2>
              </div>

              <div className='col-md-6 form-p '>

                <p>I am available for freelance work. Connect with me via phone: 919472308194 or email: imarchana2045@gmail.com</p>

                <input type='text' className='form-control mb-3' placeholder='Your Name' />
                <input type='text' className='form-control mb-3' placeholder='Your Email' />
                <input type='text' className='form-control mb-3' placeholder='Phone Number' />
                <input type='text' className='form-control mb-3' placeholder='Subject' />
                <textarea type='textarea' className='form-control mb-3' placeholder='Message' />

                <button> SUBMIT NOW
                </button>

              </div>
              {/* <div className='col-md-6'>
                          <img class="w-100 imag-size" src="./images/about-6.jpg" alt="About Images" />



                      </div> */}
              <div class="col-lg-6">
                <img className='contact-img' src="./images/contact-us-girl.jpg" class="img-fluid img-size-c" alt="" />
              </div>

            </div>

          </div>
        </section>













        {/* ======================================preloader================ */}

        <Wrapper>
          {isVisible && (
            <div className="top-btn" onClick={goToBtn}>
              <FaArrowUp className="top-btn--icon" />
              {/* <div className="top-btn--icon">
                          <svg   xmlns="http://www.w3.org/2000/svg" height="24" width="12" viewBox="0 0 384 512"><path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg>
                          
                          </div> */}

            </div>
          )}
        </Wrapper>

        {/* ==============================Progressbar================ */}





        {/* ==============================footer======================== */}
        <footer>
          <div class="social">
            <p>Follow me on social media</p>
            <ul class="wrapper">
              <a href="#" target="_blank">
                <li class="icon linkedin">
                  <span class="tooltip">LinkedIn</span>
                  <span><i class="fab fa-linkedin"></i></span>
                </li>
              </a>
              <a href="#" target="_blank">
                <li class="icon github">
                  <span class="tooltip">GitHub</span>
                  <span><i class="fab fa-github"></i></span>
                </li>
              </a>
              <a href="#" target="_blank">
                <li class="icon facebook">
                  <span class="tooltip">Facebook</span>
                  <span><i class="fab fa-facebook-f"></i></span>
                </li>
              </a>
              <a href="#" target="_blank">
                <li class="icon instagram">
                  <span class="tooltip">Instagram</span>
                  <span><i class="fab fa-instagram"></i></span>
                </li>
              </a>
              <a href="#" target="_blank">
                <li class="icon twitter">
                  <span class="tooltip">Twitter</span>
                  <span><i class="fab fa-twitter"></i></span>
                </li>
              </a>

            </ul>
          </div>
          <div class="final_text"></div>
          <p>Copyright &copy; All rights reserved
            <br />Designed Archana Dubey, 2023
          </p>
        </footer>



      </div>
    </>
  )
}

const Wrapper = styled.section`
display: flex;
justify-content: center;
align-items: center;
position: relative;

.top-btn {
  font-size: 2.4rem;
  width: 4rem;
  height: 4rem;
  color: #fff;
  opacity: 0.9 ;
  
  background-color: ${({ theme }) => theme.colors?.btn || '#d64c26'};

  box-shadow: ${({ theme }) => theme.colors?.shadow || 'defaultShadowValue'};

  border-radius: 50%;
  position: fixed;
  bottom: 5rem;
  right: 5rem;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &--icon {
    animation: gototop 1.2s linear infinite alternate-reverse;
  }

  @keyframes gototop {
    0% {
      transform: translateY(-0.5rem);
    }
    100% {
      transform: translateY(1rem);
    }
  }
}

@media (max-width: ${({ theme }) => theme.media?.mobile || '#08a4c0'}) {
/* Styles for mobile */


  .top-btn {
    right: 0;
    left: 40%;
  }
}
`;
export default Home
