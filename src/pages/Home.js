import React from "react";
import Header from "../components/Header";
import Linked from './174857.png'
import DownloadButton from "../components/DownloadButon";
import CV from './Susovan Mishra RESUME TYPE2 (3) 5464t17413t.pdf';
// import { FaDownload } from 'react-icons/fa';
const Home = () => {
  const handleDownload = () => {
    
    const cvUrl = 'https://drive.google.com/file/d/194z9l3O3q3rElOCXNh-FNJx1OKpdsu5p/view?usp=drive_link';
    window.open(cvUrl, '_blank');
  };
  return (
    <>
      <div class="container-fluid p-0">
        <Header />
        <section class="resume-section" id="about">
          <div class="resume-section-content">
            <h1 class="mb-0">
              Susovan
              <span class="text-primary"> Mishra</span>
            </h1>
            <div class="subheading mb-5">
              Garhbeta, Paschim Medinipur, West Bengal, India · +91 8972683565 ·
              <a href="mailto:susovanmishra0900@gmail.com">susovanmishra0900@gmail.com</a>
            </div>
            <p class="lead mb-5">
            Motivated computer science undergraduate with a strong foundation in programming languages, algorithms, and problem-solving skills, seeking opportunities to apply knowledge and contribute to innovative projects.
            </p>
            <div class="social-icons">
              <a class="social-icon" href="https://www.linkedin.com/in/susovan-mishra-ab6998248/">
                <i src={Linked} class="fab fa-linkedin-in"></i>
              </a>
              <a class="social-icon" href="https://github.com/Sovanmista">
                <i class="fab fa-github"></i>
              </a>
             
              {/* <a class="social-icon" href="https://leetcode.com/u/susovanmishra0800/">
                <i class="fab fa-facebook-f"></i>
              </a> */}
              <button onClick={handleDownload} className="download-btn">
      Download CV
    </button>
            </div>
          </div>
         
        </section>
        <hr class="m-0" />

        
        <section class="resume-section" id="education">
          <div class="resume-section-content">
            <h2 class="mb-5">Education</h2>
            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="flex-grow-1">
                <h3 class="mb-0">College Of Engineerig and Management, Kolaghat</h3>
                <div class="subheading mb-3">Bachelor of Technology</div>
                <div>Computer Science and Engineering</div>
                <p>CGPA: 8.34</p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">July 2020 - July 2024</span>
              </div>
            </div>
            <div class="d-flex flex-column flex-md-row justify-content-between">
              <div class="flex-grow-1">
                <h3 class="mb-0">Garhbeta High School</h3>
                <div class="subheading mb-3">Higher Secondary Education</div>
                <p>PERCENTAGE: 69.4</p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">COMPLETION YEAR: 2019</span>
              </div>
              
            </div>
            <br />
            <br />
            <div class="d-flex flex-column flex-md-row justify-content-between">
              <div class="flex-grow-1">
                <h3 class="mb-0">Garhbeta High School</h3>
                <div class="subheading mb-3">Secondary Education</div>
                <p>PERCENTAGE: 84.7</p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">COMPLETION YEAR: 2017</span>
              </div>
              
            </div>
          </div>
        </section>
        <hr class="m-0" />

        <section class="resume-section" id="skills">
          <div class="resume-section-content">
            <h2 class="mb-5">Skills</h2>
            <div class="subheading mb-3">Programming Languages & Tools</div>
            <ul class="list-inline dev-icons">
            <li class="list-inline-item">
                <i class="fab fa-html5"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-css3-alt"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-js-square"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-react"></i>
              </li>

              {/* <li class="list-inline-item">
                <i class="fab fa-html5"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-css3-alt"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-js-square"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-angular"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-react"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-node-js"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-sass"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-less"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-wordpress"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-gulp"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-grunt"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-npm"></i>
              </li> */}
              <li class="list-inline-item">
              <i class="fas fa-database"></i>

              </li>
              <li class="list-inline-item">
              <i class="fa-brands fa-java"></i>
            

              </li>
            </ul>
            <div class="subheading mb-3">SOFT SKILLS</div>
            <ul class="fa-ul mb-0">
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                Excellent written and verbal communication skills
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                Strong interpersonal skills and ability to build positive relationships.
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                Excellent problem solving abilities and ability to work in a team oriented environment.
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                Creative thinking abilities.
              </li>
            </ul>
          </div>
        </section>
        <hr class="m-0" />
        <section class="resume-section" id="interests">
          <div class="resume-section-content">
            <h2 class="mb-5">PROJECTS</h2>
            <div class="subheading mb-3">PORTFOLIO WEBSITE USING REACT <a href="https://github.com/Sovanmista/MyPortfolio">(GitHub)</a></div>
            <p>
            Developed a personal website using React, Font Awesome, and React Router, and deployed it on Netlify. The website serves as an online portfolio showcasing various projects, including detailed descriptions, images, and links to live demos and GitHub repositories.
            </p>
            <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                Utilized React for building a dynamic and responsive user interface, enhancing my skills in component-based architecture and state management.
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                Integrated Font Awesome icons to improve the visual appeal and user experience of the website.
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                
                Implemented React Router for smooth and seamless navigation between different sections of the website, providing a better user experience.
                
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                
                Ensured the website is fully responsive and mobile-friendly, enhancing accessibility across various devices.
                
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                
                Gained experience in deploying web applications on Netlify, learning about continuous deployment, hosting, and custom domain setup.
                
              </li>
             <br />

            <div class="subheading mb-3">CRYPTO TRACKER APP</div>
            <p>
            Developed a real-time web application to track the top 10 cryptocurrencies by market capitalization, displaying rank, name, price, and market cap.
            </p>
            <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                Technologies: React, JavaScript, Axios, CoinGecko API, CSS
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                Responsibilities: Designed and developed the front-end, integrated API, managed state with React hooks, implemented error
                handling, and ensured responsive design.
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                
                Key Features: Real-time data fetching from the CoinGecko API, Responsive design with a clean and user-friendly interface, Comprehensive error handling and state management using React hooks.
                
              </li>
              <br />
              <div class="subheading mb-3">REALTIME WEATHER FORCAST APP <a href="https://github.com/Sovanmista/Weatherapp">(GitHub)</a></div>
              <p>
              Developed a responsive Weather App using HTML, CSS, and JavaScript that allows users to search for any city and
              display current weather conditions and temperature by integrating with a weather API.
            </p>
            <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                Learned how to use APIs to fetch data from external services, specifically the OpenWeatherMap API for current weather and
                forecast data.
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                Implemented error handling mechanisms to manage API request failures and invalid city inputs.
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                
                Enhanced skills in dynamically updating the DOM to display weather information and hourly forecasts.
                
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                
                Understood how to handle asynchronous operations with Promises, .then() methods, and .catch() for error handling.
              </li>
          </div>
          
        </section>
        <hr class="m-0" />

        <section class="resume-section" id="interests">
          <div class="resume-section-content">
            <h2 class="mb-5">Interests</h2>
            <p>
              Apart from being a web developer, I enjoy playing Guitar, Creating music, playing chess, drawing sketches.
            </p>
            <p class="mb-0">
        
            </p>
          </div>
        </section>
        <hr class="m-0" />

        {/* <section class="resume-section" id="awards">
          <div class="resume-section-content">
            <h2 class="mb-5">Awards & Certifications</h2>
            <ul class="fa-ul mb-0">
              <li>
                <span class="fa-li">
                  <i class="fas fa-trophy text-warning"></i>
                </span>
                Google Analytics Certified Developer
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-trophy text-warning"></i>
                </span>
                Mobile Web Specialist - Google Certification
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-trophy text-warning"></i>
                </span>
                1<sup>st</sup>
                Place - University of Colorado Boulder - Emerging Tech
                Competition 2009
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-trophy text-warning"></i>
                </span>
                1<sup>st</sup>
                Place - University of Colorado Boulder - Adobe Creative Jam 2008
                (UI Design Category)
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-trophy text-warning"></i>
                </span>
                2<sup>nd</sup>
                Place - University of Colorado Boulder - Emerging Tech
                Competition 2008
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-trophy text-warning"></i>
                </span>
                1<sup>st</sup>
                Place - James Buchanan High School - Hackathon 2006
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-trophy text-warning"></i>
                </span>
                3<sup>rd</sup>
                Place - James Buchanan High School - Hackathon 2005
              </li>
            </ul>
          </div>
        </section> */}
      </div>
    </>
  );
};

export default Home;