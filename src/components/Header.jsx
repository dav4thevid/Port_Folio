import React from "react";

function Header  () {

  return (
  <header>
   <nav class="navbar navbar-expand-lg navbar-dark bg-dark pl-5">
  <a class="navbar-brand" href="#">Davoucii</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
    <ul class="navbar-nav pr-5">
      <li class="nav-item pr-5">
        <a class="nav-link" href="#">Workflow <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item pr-5">
        <a class="nav-link" href="#">Port Folio</a>
      </li>
      <li class="nav-item pr-5">
        <a class="nav-link " href="#">About</a>
      </li>
      <li class="nav-item active pr-5">
        <a class="nav-link " href="#">Contact Me</a>
      </li>
    </ul>
  </div>
</nav>

  </header>
  )
}
export default Header;
