import React from "react";

function Navbar  () {

  return (
  <header>
   <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Davoucii</a>
 
    
 
  <div class="collapse navbar-collapse justify-content-end">
    <ul class="navbar-nav">
     
    <li class="btn nav-item pr-5">
        <a class="nav-link" href="#">Workflow</a>
      </li>
      <li class="btn nav-item pr-5">
        <a class="nav-link" href="#">Port Folio</a>
      </li>
      <li class="btn nav-item pr-5">
        <a class="nav-link" href="#">About Me</a>
      </li>
      <li class="btn btn-primary ">
        <a class="nav-link " href="#">Contact Me</a>
      </li>
    </ul>
  </div>
</nav>

  </header>
  )
}
export default Navbar;
