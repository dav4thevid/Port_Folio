import React from "react";

function Navbar  () {

  return (
  <header>
   <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#home">Davoucii</a>
 
    
 
  <div class="collapse navbar-collapse justify-content-end">
    <ul class="navbar-nav">
     
    <li class="btn nav-item pr-5">
        <a class="nav-link" href="#workflow">Workflow</a>
      </li>
      <li class="btn nav-item pr-5">
        <a class="nav-link" href="#portfolio">Port Folio</a>
      </li>
      <li class="btn nav-item pr-5">
        <a class="nav-link " href="#aboutme">About Me</a>
      </li>
      <li class="btn btn-primary ">
        <a class="nav-link " href="mailto:dav4thevid@gmail.com">Contact Me</a>
      </li>
    </ul>
  </div>
</nav>

  </header>
  )
}
export default Navbar;
