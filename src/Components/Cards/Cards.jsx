import React from "react";

const Cards = () => {
  return (
    <div>
      <div className="col-12">
        <div className="row">
          <div className="col-md-4 col-xl-3 ">
            <div
              className="card order-card p-3"
              style={{
                background: "linear-gradient(to right, #14279B, #3D56B2)",
              }}
            >
              <div className="card-block">
                <h6 className="mb-2 text-white">Orders Received</h6>
                <div className="d-flex justify-content-between">
                  <i className="bx bx-cart text-white fs-1"></i>
                  <span className="text-white fs-2">486</span>
                </div>
                <p className="m-b-0 text-white">
                  Completed Orders<span className="f-right"> 351</span>
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-xl-3">
            <div
              className="card order-card p-3"
              style={{
                background: "linear-gradient(to right, #FF6D24, #F9A828)",
              }}
            >
              <div className="card-block">
                <h6 className="m-b-20 text-white">Orders Received</h6>
                <div className="d-flex justify-content-between">
                  <i className="bx bx-chart text-white fs-2"></i>

                  <span className="text-white fs-2">486</span>
                </div>
                <p className="m-b-0 text-white">
                  Completed Orders<span className="f-right"> 351</span>
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-xl-3">
            <div
              className="card order-card p-3"
              style={{
                background: "linear-gradient(to right, #34495E, #495664)",
              }}
            >
              <div className="card-block">
                <h6 className="m-b-20 text-white">Orders Received</h6>
                <div className="d-flex justify-content-between">
                  <i className="bx bx-chart text-white fs-2"></i>

                  <span className="text-white fs-2">486</span>
                </div>

                <p className="m-b-0 text-white">
                  Completed Orders<span className="f-right"> 351</span>
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-xl-3">
            <div
              className="card order-card p-3"
              style={{
                background: "linear-gradient(to right, #EE0E51, #FE4E6E)",
              }}
            >
              <div className="card-block">
                <h6 className="m-b-20 text-white">Orders Received</h6>
                {/* <i className="fa fa-credit-card f-left"></i> */}

                <div className="d-flex justify-content-between">
                  <i className="bx bx-user text-white fs-2"></i>
                  <span className="text-white fs-2"> 486</span>
                </div>

                <p className="m-b-0 text-white">
                  Completed Orders<span className="f-right">  351</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
