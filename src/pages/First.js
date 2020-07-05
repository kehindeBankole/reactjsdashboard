import React from 'react'
import { mydata } from '../mydata'
export const First = () => {
  return (
    <>
      <div className="container-fluid" id="lef">
        <div className="container" id="first">
          <div className="row">
            <div className="col-sm-3">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col">
                      <span className="fa-stack fa-lg mt-3" style={{ color: "blue" }}>
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
            <div className="col-sm-3">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col">
                      <span className="fa-stack fa-lg mt-3" style={{ color: "orange" }}>
                        <i className="fa fa-circle fa-stack-2x"></i>
                        <i className="fas fa-book fa-stack-1x fa-inverse"></i>
                      </span>
                    </div>
                    <div className="col">
                      <h1>7</h1>
                      <h4>pending approvals</h4>
                    </div>
                    <div className="col"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col">
                      <span className="fa-stack fa-lg mt-3" style={{ color: "red" }}>
                        <i className="fa fa-circle fa-stack-2x"></i>
                        <i className="fas fa-person-booth fa-stack-1x fa-inverse"></i>
                      </span>
                    </div>
                    <div className="col">
                      <h1>10</h1>
                      <h4>rejected approval</h4>
                    </div>
                    <div className="col"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col">
                      <span className="fa-stack fa-lg mt-3" style={{ color: "green" }}>
                        <i className="fa fa-circle fa-stack-2x"></i>
                        <i className="fas fa-church fa-stack-1x fa-inverse"></i>
                      </span>
                    </div>
                    <div className="col">
                      <h1>10</h1>
                      <h4>verified partners</h4>
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
              {mydata.map((label, i) => {
                return (
                  <tr key={i}>
                    <td>{label.name}</td>
                    <td>
                      {label.status === "pending" ? <span className="badge badge-pill py-2 badge-warning">{label.status}</span> : label.status === "verified" ? <span className="badge badge-pill py-2 badge-success">{label.status}</span> :
                        label.status === "approved" ? <span className="badge badge-pill py-2 badge-primary">{label.status}</span> : label.status === "rejected" ? <span className="badge badge-pill py-2 badge-danger">{label.status}</span> : ""}
                    </td>
                    <td>{label.dateapplied}</td>
                    <td>{label.dateapproved}</td>
                    <td>{label.email}</td>
                    <td>
                      <button  className="btn" data-container="body" data-toggle="popover" data-placement="top" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
                        <span className="fas fa-ellipsis-v"></span></button>
                    </td>
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