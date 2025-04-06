// import React from "react";
// import "./FlightDetailsPage.css";

// const FlightDetailsPage = ({ searchData, flightData }) => {
//   return (
//     <div className="flight-details-page">
//       {/* Top Section - Search Information */}
//       <div className="search-info">
//         <h2>Flight Search Details</h2>
//         <p><strong>From:</strong> {searchData.from}</p>
//         <p><strong>To:</strong> {searchData.to}</p>
//         <p><strong>Date:</strong> {searchData.date}</p>
//       </div>

//       {/* Flight Details Table */}
//       <div className="flight-table-container">
//         <table className="flight-table">
//           <thead>
//             <tr>
//               <th>Flight No</th>
//               <th>Airplane</th>
//               <th>Airplane Reg</th>
//               <th>Departure</th>
//               <th>Arrival</th>
//               <th>Source</th>
//               <th>Destination</th>
//               <th>Economy Fare</th>
//               <th>Business Fare</th>
//               <th>First Class Fare</th>
//               <th>Status</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {flightData.map((flight) => (
//               <tr key={flight.flightNo}>
//                 <td>{flight.flightNo}</td>
//                 <td>{flight.airplane}</td>
//                 <td>{flight.airplaneReg}</td>
//                 <td>{flight.departure}</td>
//                 <td>{flight.arrival}</td>
//                 <td>{flight.source}</td>
//                 <td>{flight.destination}</td>
//                 <td>{flight.economyFare}</td>
//                 <td>{flight.businessFare}</td>
//                 <td>{flight.firstClassFare}</td>
//                 <td>{flight.status}</td>
//                 <td>
//                   <button className="book-btn">Book Flight</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default FlightDetailsPage;

import React from "react";
import { useLocation } from "react-router-dom";
import "./FlightDetailsPage.css";
import { useNavigate } from "react-router-dom";

const FlightDetailsPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const searchData = state?.searchData || {};

  const flightData = [
    {
      flightNo: "AA101",
      airplane: "Boeing 777",
      airplaneReg: "N123AA",
      departure: "10:00 AM",
      arrival: "8:00 PM",
      source: searchData.departureAirport,
      destination: searchData.arrivalAirport,
      economyFare: "$500",
      businessFare: "$1200",
      firstClassFare: "$3000",
      status: "On Time",
    },
    {
      flightNo: "BA202",
      airplane: "Airbus A380",
      airplaneReg: "G-BA202",
      departure: "1:00 PM",
      arrival: "11:00 PM",
      source: searchData.departureAirport,
      destination: searchData.arrivalAirport,
      economyFare: "$450",
      businessFare: "$1100",
      firstClassFare: "$2900",
      status: "Delayed",
    },
    {
      flightNo: "DL303",
      airplane: "Boeing 737",
      airplaneReg: "N303DL",
      departure: "6:00 AM",
      arrival: "12:00 PM",
      source: searchData.departureAirport,
      destination: searchData.arrivalAirport,
      economyFare: "$400",
      businessFare: "$1000",
      firstClassFare: "$2500",
      status: "Cancelled",
    },
    {
      flightNo: "UA404",
      airplane: "Airbus A320",
      airplaneReg: "N404UA",
      departure: "3:00 PM",
      arrival: "9:00 PM",
      source: searchData.departureAirport,
      destination: searchData.arrivalAirport,
      economyFare: "$520",
      businessFare: "$1300",
      firstClassFare: "$3100",
      status: "On Time",
    },
    {
      flightNo: "AF505",
      airplane: "Boeing 787",
      airplaneReg: "F505AF",
      departure: "8:00 AM",
      arrival: "4:00 PM",
      source: searchData.departureAirport,
      destination: searchData.arrivalAirport,
      economyFare: "$560",
      businessFare: "$1400",
      firstClassFare: "$3200",
      status: "Delayed",
    },
    {
      flightNo: "LH606",
      airplane: "Airbus A340",
      airplaneReg: "D606LH",
      departure: "5:00 PM",
      arrival: "11:00 PM",
      source: searchData.departureAirport,
      destination: searchData.arrivalAirport,
      economyFare: "$480",
      businessFare: "$1250",
      firstClassFare: "$3050",
      status: "Cancelled",
    },
  ];

  const handleBookFlight = (flight) => {
    navigate("/book-flight", { state: { flight } });
  };

  return (
    <div className="flight-details-page">
      {/* Top Section */}
      <div className="search-info">
        <h2>Flight Search Details</h2>
        <p>
          <strong>From:</strong> {searchData.departureAirport}
        </p>
        <p>
          <strong>To:</strong> {searchData.arrivalAirport}
        </p>
        <p>
          <strong>Date:</strong> {searchData.departureDate}
        </p>
      </div>

      {/* Flight Details Table */}
      <div className="flight-table-container">
        <table className="flight-table">
          <thead>
            <tr>
              <th>Flight No</th>
              <th>Airplane</th>
              <th>Airplane Reg</th>
              <th>Departure</th>
              <th>Arrival</th>
              <th>Source</th>
              <th>Destination</th>
              <th>Economy Fare</th>
              <th>Business Fare</th>
              <th>First Class Fare</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {flightData.map((flight) => (
              <tr key={flight.flightNo}>
                <td>{flight.flightNo}</td>
                <td>{flight.airplane}</td>
                <td>{flight.airplaneReg}</td>
                <td>{flight.departure}</td>
                <td>{flight.arrival}</td>
                <td>{flight.source}</td>
                <td>{flight.destination}</td>
                <td>{flight.economyFare}</td>
                <td>{flight.businessFare}</td>
                <td>{flight.firstClassFare}</td>
                <td>
                  <div className="status-container">
                    <span
                      className={
                        flight.status === "On Time"
                          ? "status-circle on-time"
                          : flight.status === "Delayed"
                          ? "status-circle delayed"
                          : "status-circle cancelled"
                      }
                    ></span>
                    <span className="status-text">{flight.status}</span>
                  </div>
                </td>
                <td>
                  <button
                    className="book-btn"
                    onClick={() => handleBookFlight(flight)}>  Book </button>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FlightDetailsPage;
