import React from "react";

function Body() {
  return (
    <div class="grid">
      <img
        src="https://i.ibb.co/xDRzPTM/22781184.jpg"
        alt="22781184"
        border="0"
        className="img_header"
      />
      <header className="font_style">
        I'm Dave Davoucii, <br />
        a UI/UX Developer <br />
        based in Lagos, Nigeria.
        <br />
        <p>
          Im <strong>Creative</strong> & <strong>Passionate</strong> <br />
          about my <strong>Work,</strong> I stand on a <br />
          sweet spot where design <br />& <strong>Code Intersect.</strong>
        </p>
        <button class = "btn btn-success btn-xs mr-4">PROJECTS</button>
        <button class = "btn btn-info btn-xs">WORKFLOW</button>
      </header>
    </div>
  );
}

export default Body;
