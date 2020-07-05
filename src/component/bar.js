import React from 'react'

export const Bar = () => {
  return (
    <>
      <div className="navbar" id="bar">
        {/* <h1 className="navbar-brand mb-0 h1" id="lef"></h1> */}
        <ul className="navbar-nav mx-auto">
          <li className="nav-item">
            <div className="input-group">
              <span className="input-group-addon">
                <button type="button" className="btn btn-primary" id="searchbtn">
                  <span className="fas fa-search"></span>
                </button>
              </span>
              <input type="text" className="form-control" aria-label="Text input with button" />
            </div>
          </li>
        </ul>

        <ul className="navbar-nav">
          <li className="nav-item mr-5">
            <span className="fas fa-user fa-lg"></span><span className="username ml-2">bankole kehinde</span>
          </li>
        </ul>
      </div>
    </>
  )
}