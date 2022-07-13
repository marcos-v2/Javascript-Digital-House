import React from "react";

import "../assets/css/app.css"
import GenresInDb from "./GenresInDb";
import LastMovieInDb from "./LastMovieInDb";
import TopBar from "./TopBar";


function ContentRowTop() {
  return (
    <div id="content">
    <TopBar/>
      {/*<!-- Content Row Top --> */}
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
        </div>

        {/* <!-- Content Row Movies--> */}
        <div className="row">
          {/* <!-- Movies in Data Base --> */}
          <div className="col-md-4 mb-4">
            <div className="card border-left-primary shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                      Movies in Data Base
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">21</div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-film fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Total awards --> */}
          <div className="col-md-4 mb-4">
            <div className="card border-left-success shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                      {" "}
                      Total awards
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">79</div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-award fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Actors quantity --> */}
          <div className="col-md-4 mb-4">
            <div className="card border-left-warning shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                      Actors quantity
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">49</div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-user fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End movies in Data Base --> */}

        {/* <!-- Content Row Last Movie in Data Base --> */}
        <div className="row">
          {/* <!-- Last Movie in DB --> */}
          <LastMovieInDb/>
          {/* <!-- End content row last movie in Data Base --> */}

          {/* <!-- Genres in DB --> */}
          <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h5 className="m-0 font-weight-bold text-gray-800">
                  Genres in Data Base
                </h5>
              </div>
              <div className="card-body">
                <div className="row">
                  <GenresInDb/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentRowTop;
