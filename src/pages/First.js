import React from 'react'
import { mydata } from '../mydata'
export const First = () => {
  return (
    <>
      <div className="container-fluid" id="lef">
        <div className="container" id="first">
          <div className="row">
            <div className="col-sm-4">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col">
                      <span className="fa-stack fa-lg mt-3" style={{ color: "red" }}>
                        <i className="fa fa-circle fa-stack-2x"></i>
                        <i className="fas fa-home fa-stack-1x fa-inverse"></i>
                      </span>
                    </div>
                    <div className="col">
                      <h1>40</h1>
                      <h4>approved partners</h4>
                    </div>
                    <div className="col"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col">
                      <span className="fa-stack fa-lg mt-3" style={{ color: "green" }}>
                        <i className="fa fa-circle fa-stack-2x"></i>
                        <i className="fas fa-book fa-stack-1x fa-inverse"></i>
                      </span>
                    </div>
                    <div className="col">
                      <h1>40</h1>
                      <h4>approved partners</h4>
                    </div>
                    <div className="col"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col">
                      <span className="fa-stack fa-lg mt-3" style={{ color: "blue" }}>
                        <i className="fa fa-circle fa-stack-2x"></i>
                        <i className="fas fa-person-booth fa-stack-1x fa-inverse"></i>
                      </span>
                    </div>
                    <div className="col">
                      <h1>40</h1>
                      <h4>approved partners</h4>
                    </div>
                    <div className="col"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <br />

          {/* <div className="card">
            <div className="card-body"> */}
          <table className="table table-responsive-sm">
            <thead style={{ borderBottom: "none" }}>
              <tr style={{ borderBottom: "none" }}>
                <td><h3>Partners</h3></td>
                <td></td>
                <td>Last Name</td>
                <td>Username</td>
              </tr>
            </thead>
            <thead style={{ borderBottom: "none" }}>
              <tr style={{ borderBottom: "none" }}>
                <th scope="col">name</th>
                <th scope="col">status</th>
                <th scope="col">date applied</th>
                <th scope="col">date approved</th>
                <th scope="col">email</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {mydata.map((label , i) => {
                return (
                  <tr key={i}>
                    <th scope="row">{label.name}</th>
                    <td>
                      {label.status === "pending" ? <span className="badge badge-pill badge-warning">{label.status}</span> : label.status === "verified" ? <span className="badge badge-pill badge-success">{label.status}</span> :
                        label.status === "approved" ? <span className="badge badge-pill badge-primary">{label.status}</span> : label.status === "rejected" ? <span className="badge badge-pill badge-danger">{label.status}</span> : ""}
                    </td>
                    <td>{label.dateapplied}</td>
                    <td>{label.dateapproved}</td>
                    <td>{label.email}</td>
                    <td><span className="fas"></span></td>
                  </tr>
                  
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}