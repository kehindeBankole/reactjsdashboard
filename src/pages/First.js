import React from 'react'
import { mydata } from '../mydata'
import { carddata } from '../carddata'
import { Card } from '../component/Card'
export const First = () => {
  return (
    <>
      <div className="container-fluid" id="lef">
        <div className="container" id="first">
          <div className="row">
            {
              carddata.map((d) => {
                return (
                  <div className="col-sm-3">
                    <Card color={d.color} status={d.status} value={d.number} icon={d.icon}/>
                  </div>
                )
              })
            }
          </div>
          <br />
          <table className="table table-responsive-sm">
            <thead style={{ borderBottom: "none" }}>
              <tr style={{ borderBottom: "none" }}>
                <td><h3>Partners</h3></td>
                <td></td>
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
                      <button className="btn" data-container="body" data-toggle="popover" data-placement="top" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
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