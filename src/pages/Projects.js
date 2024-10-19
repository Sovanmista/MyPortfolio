import React from 'react'
import Header from "../components/Header";
function Projects() {
  return (
    <div class="container-fluid p-0">
           
            <Header />
         <section class="resume-section" id="interests">
          <div class="resume-section-content">
            <h2 class="mb-5">PROJECTS</h2>
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
    </div>
  )
}

export default Projects
