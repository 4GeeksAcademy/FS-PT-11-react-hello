// import React from "react";

// //include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";
// import clock from "../../img/clock-regular.svg";

// //create your first component
// const Home = (props) => {
//   const counter = 0;
//   return (
//     <div className="text-center">
//       <h1 className="text-center mt-5">Simple counter</h1>
//       <p>
//         <img src={rigoImage} />
//       </p>
//       <div className="container d-flex flex-row bg-dark">
//         <div
//           className="container bg-dark text-white"
//           style={{ fontSize: "75px", fontFamily: "calibri" }}
//         >
//           <i class="far fa-clock"></i>
//         </div>
//         <div
//           className="container bg-dark text-white"
//           style={{ fontSize: "75px", fontFamily: "calibri" }}
//         >
//           {props.four}
//         </div>
//         <div
//           className="container bg-dark text-white"
//           style={{ fontSize: "75px", fontFamily: "calibri" }}
//         >
//           {props.three}
//         </div>
//         <div
//           className="container bg-dark text-white"
//           style={{ fontSize: "75px", fontFamily: "calibri" }}
//         >
//           {props.twoo}
//         </div>
//         <div
//           className="container bg-dark text-white"
//           style={{ fontSize: "75px", fontFamily: "calibri" }}
//         >
//           {props.one}
//         </div>
//       </div>
//       <p className="mt-5 fs-1">
//         This is a simple counter, it increase every second.
//       </p>
//     </div>
//   );
// };
// let counter = 0;
// setInterval(function() => {
// 	const numberFour = Math.floor(counter/10000);
// 	const NumberThree = Math.floor(counter/1000);
// 	const NumberTwo = Math.floor(counter/100);
// 	const numberOne = Math.floor(counter/10);
// 	console.log(numberOne, NumberTwo, NumberThree, numberFour);;
// 	<Home, one={counter.indexOf()} />
// }, 1000);

// export default Home;
