import React from "react";
import Header from "../components/Header";

const Education = () => {
  return (
    <>
      <div class="container-fluid p-0">
        <Header />
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
      </div>
    </>
  );
};

export default Education;