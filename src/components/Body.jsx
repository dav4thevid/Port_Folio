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
        Im <span>Creative & Passionate about my Work, </span> I stand on a{" "}
        <p>
          sweet spot where
          <span> Design & Code Intersect. </span>
        </p>
      </p>

      <div class="btn btn-primary  btn-sm-4  p-4">Projects</div>
      <div class="btn btn-default btn-sm-4 border-dark p-4">Workflow</div>
    </div>

   

  );
}

export default Body;
