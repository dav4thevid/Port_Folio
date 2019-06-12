import React from "react";

function Workflow() {
  return (
    <div className="container-fluid workflow" id = "workflow">
      <header>Out of clutter, find simplicity</header>
      <p class="workflow_p">
        Im passionate about <span>lean </span>methodology, <span>sprints</span>{" "}
        and <span>user validation</span>
      </p>
      <p class="workflow_p">
        I shape a product by <span>iterating</span> on both features and
        problems, day by day.
      </p>
      <br />
      <br />
      <br />

      <div class="container">
        <div class="row">
          <div class="thumbnail col-6 col-sm-6 col-md-3">
            <h5>
              <span>Think</span>
            </h5>
            <p id="design" class="image_p">
              {" "}
              and solve
            </p>
            <img
              class="effect3"
              src="https://i.ibb.co/dms5Cdz/Think.jpg"
              alt="Think"
              border="0"
            />
          </div>
          <div class="thumbnail col-6 col-sm-6 col-md-3">
            <h5>
              <span>Build</span>
            </h5>
            <p id="design" class="image_p">
              {" "}
              and design
            </p>
            <img
              class="effect3"
              src="https://i.ibb.co/q1nDw3P/collaboration-clipart-jigsaw-3.jpg"
              alt="collaboration-clipart-jigsaw-3"
              border="0"
            />
          </div>
          <div class="thumbnail col-6 col-sm-6 col-md-3">
            <h5>
              <span>Launch</span>
            </h5>
            <p id="design" class="image_p">
              and test
            </p>
            <img
              class="effect3"
              src="https://i.ibb.co/sbVkCsM/Launch.jpg"
              alt="Launch"
              border="0"
            />
          </div>
          <div class="thumbnail col-6 col-sm-6 col-md-3">
            <h5>
              <span>Measure</span>
            </h5>
            <p id="design" class="image_p">
              and learn
            </p>
            <img
              class="effect3"
              src="https://i.ibb.co/bKqjq44/Measure.jpg"
              alt="Measure"
              border="0"
            />
          </div>
        </div>
      </div>

      <h5>Every day, I refine and improve my workflow.</h5>
      <h5>
        I’m constantly mixing <span>different methodologies</span>, in order to
        get the most out of each one. Lean, Agile, Scrum, GTD…
      </h5>
      <h5>
        They’re not dogma, just a <span>starting point.</span>
      </h5>
      <div class="container">
        <div class="row">
          <div class="col text-center">
            <a
              class="btn btn-white btn-sm-4"
              href="mailto:dav4thevid@gmail.com"
            >
              Let's work together
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Workflow;
