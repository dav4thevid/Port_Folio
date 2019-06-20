import React from "react";

function Body() {
  return (
    <div class="content container" id="home">
      <div className="header_margin">
        <a href="https://www.github.com/dav4thevid" target="_blank">
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
        I'm <span>Creative & Passionate about my Work, </span> I stand on a
        <p>
          sweet spot where
          <span> Design & Code Intersect. </span>
        </p>
      </p>
      <div class="container">
        <div class="row">
          <div class="col-5 ml-4">
            <a href="#portfolio" class="btn btn-primary p-4">
              Projects
            </a>
          </div>
          <div class="col-5">
            <a href="#workflow" class="btn btn-default border-dark p-4">
              Workflow
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
