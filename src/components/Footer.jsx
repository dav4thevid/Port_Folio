import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";

library.add(faFacebookF,faTwitter,faGithub,faLinkedin);

function Footer() {
  return (
    <div>
      <div class="container-fluid footer">
        <div class="row">
          <footer class="footer-header">
            <h2 class="footer-header">
              "Out of clutter, find simplicity. from discord, find harmony. In
              the middle of difficulty lies opportunity. - Albert Einstern"
            </h2>
            <h2 class="footer-header">
              "Never confuse movement with action." - Ernest Hemingway
            </h2>
            <br />
            <hr/>
            <div>
              {" "}
              <a class = "fa-lg" href="https://www.facebook.com/davoucii" target = "_blank">
                <FontAwesomeIcon icon={["fab", "facebook-f"]} />
              </a>
              <a class = "fa-lg" href="https://www.twitter.com/dav4thevid" target = "_blank">
                <FontAwesomeIcon icon={["fab", "twitter"]} />
              </a>
              <a  class = "fa-lg" href="https://www.github.com/dav4thevid" target = "_blank">
                <FontAwesomeIcon icon={["fab", "github"]} />
              </a>
              <a class = "fa-lg" href="https://www.linkedin.com/in/davoucii/" target = "_blank">
                <FontAwesomeIcon icon={["fab", "linkedin"]} />
              </a>
              <br/>
              <br/>
              <div class = "copyright">©Davoucii 2019</div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Footer;
