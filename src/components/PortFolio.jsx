import React from "react";

function PortFolio() {
  return (
    <div>
      <div class="container port-folio " id="portfolio">
        <div class="row">
          <div class="col-12">
            <div class="col text-center">
              <h1 id="portfolio-h1">YelpCamp </h1>
              <p id="portfolio-p">
                A Yelp Camp App, where users can add campgrounds, comments on
                campgrounds and check prizing.
              </p>
            </div>
            <a
              href="https://floating-sands-38542.herokuapp.com/"
              target="_blank"
            >
              <img
                class="mx-auto d-block col-sm-12 col-md-12 col-lg-12 effect"
                src="https://i.ibb.co/RpTQbnC/Capture.png"
                alt="Capture"
                border="0"
              />
            </a>
          </div>
        </div>
        <br />
        <div class="row">
          <div class="col-sm-12 col-md-6  ">
            <div class="col text-center">
              <h1 id="portfolio-h1">RGB Game </h1>
              <p id="portfolio-p">
                An RGB Game which helps players to memorize RGB colors. You
                think you know RGB Colors?
                <p>
                  <span id="portfolio-span"> Play this Game.</span>
                </p>
              </p>
            </div>
            <a href="https://codepen.io/dav4thevid/full/YdqBNx" target="_blank">
              <img
                class="mx-auto d-block col-sm-12 col-md-12 col-lg-12 effect"
                src="https://i.ibb.co/0hxhg4y/RGB.png"
                alt="RGB"
                border="0"
              />
            </a>
          </div>

          <br />

          <div class="col-sm-12 col-md-6  ">
            <div class="col text-center">
              <h1 id="portfolio-h1">Patatap-Clone </h1>
              <p id="portfolio-p">
                Patatap is a portable animation and sound kit. With the touch of
                a finger create melodies charged with moving shapes.
                <p>
                  <span id="portfolio-span">
                    {" "}
                    Warning: contains flashing images.
                  </span>
                </p>
              </p>
            </div>
            <a
              href="https://patatap-clonedavoucii.netlify.com/"
              target="_blank"
            >
              <img
                class="mx-auto d-block col-sm-12 col-md-12 col-lg-12 effect"
                src="https://i.ibb.co/8XNd1Qb/p8lPXhe.png"
                alt="RGB"
                border="0"
              />
            </a>
          </div>
        </div>

        <br />
        <div class="row ">
          <div class="col-sm-12 col-md-6  ">
            <div class="col text-center effect ">
              <h1 id="portfolio-h1">RestFull Blog App </h1>
              <p id="portfolio-p">
                A CRUD Blog, Where users can Add,Edit and Delete Blog Posts
              </p>
            </div>
            <a
              href="https://pacific-shelf-39954.herokuapp.com/blogs"
              target="_blank"
            >
              <img
                class="mx-auto d-block col-sm-12 col-md-12 col-lg-12 effect"
                src="https://i.ibb.co/2v55XBN/Capture.png"
                alt="Blog App"
                border="0"
              />
            </a>
          </div>
          <div class="col-sm-12 col-md-6 ">
            <div class="col contact-me well">
              <h1 class="pl-3">
                Do you like what you are seeing? Lets have a chat!
              </h1>
              <p class="pl-3">
                I’m always looking to expand my network, get engaged in new
                challenges, or just have a coffee!
              </p>
              <a
                href="mailto:dav4thevid@gmail.com"
                id="email-me"
                class=" btn btn-success port-folio-button"
              >
                Send me an E-mail
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
