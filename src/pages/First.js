import React from 'react'
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
                      <span class="fa-stack fa-lg mt-3" style={{ color: "red" }}>
                        <i class="fa fa-circle fa-stack-2x"></i>
                        <i class="fas fa-home fa-stack-1x fa-inverse"></i>
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
                      <span class="fa-stack fa-lg mt-3" style={{ color: "green" }}>
                        <i class="fa fa-circle fa-stack-2x"></i>
                        <i class="fas fa-book fa-stack-1x fa-inverse"></i>
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
                      <span class="fa-stack fa-lg mt-3" style={{ color: "blue" }}>
                        <i class="fa fa-circle fa-stack-2x"></i>
                        <i class="fas fa-person-booth fa-stack-1x fa-inverse"></i>
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
          <table class="table table-responsive-sm">
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
                <th scope="col">#</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}