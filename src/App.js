import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login/Login';
import './App.css';
import  BookingPage from './Components/BookingPage/BookingPage'
import Header from './header';
import Register from './Components/Register/Register';
import FlightDetailsPage from './Components/FlightDetailsPage/FlightDetailsPage';
import BookFlight from './Components/BookFlight/BookFlight';
import AdminPage from './Components/AdminPage/AdminPage';
import AboutPage from './Components/About/AboutPage';
import ContactPage from './Components/ContactPage/ContactPage';
import PaymentPage from './Components/PaymentPage/PaymentPage';
import TicketPage from './Components/TicketPage/TicketPage';


const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<BookingPage/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/flights" element={<FlightDetailsPage />} />
        <Route path="/book-flight" element={<BookFlight />} />
        <Route path="/AdminPage" element={<AdminPage/>} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/TicketPage" element={<TicketPage />} />



      </Routes>
    </Router>
  );
};

export default App;



// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Login from './Components/Login/Login';
// import './App.css';
// import BookingPage from './Components/BookingPage/BookingPage';
// import Header from './header';
// import Register from './Components/Register/Register';
// import FlightDetailsPage from './Components/FlightDetailsPage/FlightDetailsPage';

// const App = () => {
//   const searchData = {
//     from: "New York (JFK)",
//     to: "London (LHR)",
//     date: "2025-03-31",
//   };

//   const flightData = [
//     {
//       flightNo: "AA101",
//       airplane: "Boeing 777",
//       airplaneReg: "N123AA",
//       departure: "10:00 AM",
//       arrival: "8:00 PM",
//       source: "JFK",
//       destination: "LHR",
//       economyFare: "$500",
//       businessFare: "$1200",
//       firstClassFare: "$3000",
//       status: "On Time",
//     },
//     {
//       flightNo: "BA202",
//       airplane: "Airbus A380",
//       airplaneReg: "G-BA202",
//       departure: "1:00 PM",
//       arrival: "11:00 PM",
//       source: "JFK",
//       destination: "LHR",
//       economyFare: "$450",
//       businessFare: "$1100",
//       firstClassFare: "$2900",
//       status: "Delayed",
//     },
//   ];

//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/" element={<BookingPage />} />
//         <Route
//           path="/flights"
//           element={<FlightDetailsPage searchData={searchData} flightData={flightData} />}
//         />
//         <Route path="/book" element={<h1>Book a Flight Page</h1>} />
//         <Route path="/about" element={<h1>About Us</h1>} />
//         <Route path="/contact" element={<h1>Contact Page</h1>} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/flights" element={<FlightDetailsPage />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;
