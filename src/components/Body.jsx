import React from "react";

function Body() {
  return (
    <div class="content container" id = "home">
      <div className="header_margin">
        <a href="https://www.github.com/dav4thevid" target = "_blank">
          {" "}
          <div class="wrapper" title="Davoucii" />
        </a>
      </div>
      <div>
        <h1 className="header_style">
          I'm Dave Davoucii, <br />
          a Front-End/Back-End(Node.js) <br />
          Developer.  
        </h1>
      </div>

      <p class="paragraph_style">
        Im <span>Creative & Passionate about my Work, </span> I stand on a
        <p>
          sweet spot where
          <span> Design & Code Intersect. </span>
        </p>
      </p>

      <a href = "#portfolio" class="btn btn-primary   m-5 p-4">Projects</a>
      <a href = "#workflow" class="btn btn-default border-dark p-4">Workflow</a>
    </div>

   

  );
}

export default Body;
