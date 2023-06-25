//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import rigoImage from "../../src/img/rigo-baby.jpg";
import "../styles/index.css";

function SimpleCounter(props) {
  return (
    <div>
      <div className="rigo">
        <img src={rigoImage} />
      </div>
      <div className="BigCounter">
        <div>
          <i className="far fa-clock"></i>
        </div>
        <div className="digFour">{props.digitFour}</div>
        <div className="digThree">{props.digitThree}</div>
        <div className="digTwo">{props.digitTwo}</div>
        <div className="digOne">{props.digitOne}</div>
      </div>
    </div>
  );
}

SimpleCounter.propTypes = {
  digitFour: PropTypes.number,
  digitThree: PropTypes.number,
  digitTwo: PropTypes.number,
  digitOne: PropTypes.number,
};

let counter = 0;
setInterval(function () {
  const four = Math.floor(counter / 1000);
  const three = Math.floor(counter / 100) % 10;
  const two = Math.floor(counter / 10) % 10;
  const one = Math.floor(counter / 1) % 10;
  console.log(one, two, three, four);
  ReactDOM.render(
    <SimpleCounter
      digitOne={one}
      digitTwo={two}
      digitThree={three}
      digitFour={four}
    />,
    document.querySelector("#app")
  );
  counter++;
}, 1000);
