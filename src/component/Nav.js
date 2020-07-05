import React from 'react'
import '../style/bootstrap.min.css'
import '../style/fontawesome-free-5.13.0-web/css/all.css'
import {NavLink} from 'react-router-dom'
import {Bar} from '../component/bar'
export const Nav=()=>{
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-dark" id="sideNav">
  <div className="navbar-brand" to="">Navbar</div>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon d-none"></span>
    <h1>453</h1>
  </button>

  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item">
        <NavLink className="nav-link" activeClassName="active"  to="/" exact>
          <div className=" fas fa-home fa-lg"></div>
           <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" activeClassName="active" to="/second">
        <div className="fas fa-book-open fa-lg"></div>
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" activeClassName="active" to="/third">
          <div className="fas fa-database fa-lg"></div>
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link disabled" to="/fourth">
          <div className="fas fa-bookmark fa-lg"></div>
        </NavLink>
      </li>
      <li className="nav-item" style={{bottom : "2rem" , position:"absolute" , transform:"translate(50% , 50%)"}}>
        <NavLink className="nav-link disabled" to="/fourth">
        <div className="fas fa-tools fa-lg"></div>
        </NavLink>
      </li>
    </ul>
  </div>
</nav>
<Bar/>
</>
    )
}