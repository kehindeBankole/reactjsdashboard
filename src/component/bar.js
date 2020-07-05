import React from 'react'

export const Bar=()=>{
    return(
        <>
<div class="navbar" id="bar">
  <h1 class="navbar-brand mb-0 h1" id="lef">My Partners</h1>
  <ul className="navbar-nav mx-auto">
    <li className="nav-item">
    <div class="input-group">
      <span class="input-group-addon">
      <button type="button" class="btn btn-primary">Primary</button>
      </span>
      <input type="text" class="form-control" aria-label="Text input with button"/>
    </div>
    </li>
  </ul>

  <ul className="navbar-nav">
    <li className="nav-item mr-5">
<span className="fas fa-user fa-lg"></span>
    </li>
  </ul>
</div>
</>
    )
}