import React from "react";


function Body() {
  return (
    <div class="content container">
      <div className="header_margin">
        <img src="https://i.ibb.co/6w24m3f/2.jpg" alt="2" border="0" />
      </div>
      <div>
        <h1 className="header_style">
          I'm Dave Davoucii, <br />
          a UI/UX Developer <br />
          based in Lagos,
          <br />
          Nigeria.
        </h1>
      </div>

      <p class="paragraph_style">
        Im{" "}
        <span>
          Creative & Passionate about my Work,{" "}
        </span>{" "}
        I stand on a{" "}
        <p>
          sweet spot where
          <span>
            {" "}
            Design & Code Intersect.{" "}
          </span>
        </p>
      </p>
      <div>
        <button class="btn btn-primary btn-sm p-4 ">PROJECTS</button>
        <button class="btn btn-default btn-sm border-dark p-4">WORKFLOW</button>
      </div>
    </div>
  );
}

export default Body;
