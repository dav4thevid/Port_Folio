import React from "react";

function Body() {
  return (
    <div class=" container grid">
      <h1 className="header_style">
        I'm Dave Davoucii, <br />
        a UI/UX Developer <br />
        based in Lagos, Nigeria.
      </h1>
      <div>
        <p class="paragraph_style">
          Im <span>Creative & Passionate 
          about my Work,</span> I stand on a sweet spot where <span>design &
          Code Intersect. </span>
        </p>
      </div>

      <div class = "header_button">
        <button class="btn btn-primary btn-md pl-5 pr-5 mr-5">PROJECTS</button>
        <button class="btn btn-default btn-md pl-5 pr-5 border-dark">WORKFLOW</button>
      </div>
      <div class = "header_image">
      <img src="https://i.ibb.co/cXh6vYp/IMG-20160820-001615.jpg" alt="IMG-20160820-001615"/>
    </div>
    </div>
   
  );
}

export default Body;
