import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import clock from "../../img/clock-regular.svg";

//create your first component
const Home = () => {
  return (
    <div className="text-center">
      <h1 className="text-center mt-5">Simple counter</h1>
      <p>
        <img src={rigoImage} />
      </p>
      <div className="container d-flex flex-row bg-dark">
        <div
          className="container bg-dark text-white"
          style={{ fontSize: "75px", fontFamily: "calibri" }}
        >
          <i class="fa-regular fa-clock"></i>
        </div>
        <div
          className="container bg-dark text-white"
          style={{ fontSize: "75px", fontFamily: "calibri" }}
        >
          0
        </div>
        <div
          className="container bg-dark text-white"
          style={{ fontSize: "75px", fontFamily: "calibri" }}
        >
          0
        </div>
        <div
          className="container bg-dark text-white"
          style={{ fontSize: "75px", fontFamily: "calibri" }}
        >
          0
        </div>
        <div
          className="container bg-dark text-white"
          style={{ fontSize: "75px", fontFamily: "calibri" }}
        >
          0
        </div>
      </div>
      <p className="mt-5 fs-1">
        This is a simple counter, it increase each second.
      </p>
    </div>
  );
};

export default Home;
