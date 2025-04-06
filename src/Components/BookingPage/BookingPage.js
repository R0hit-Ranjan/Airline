import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BookingPage.css";
import { MdFlightTakeoff, MdFlightLand } from "react-icons/md";
import { CiCalendarDate } from "react-icons/ci";
import { IoPersonAddSharp } from "react-icons/io5";
import AboutPage from "../About/AboutPage";
import ContactPage from "../ContactPage/ContactPage";
import Footer from "../Footer/Footer";
import  Weekened  from '../../assests/Images/Weekened.jpg';
import  SummerEscape  from '../../assests/Images/Summer.jpg'
import BusinessClass  from '../../assests/Images/Buisness.jpg'


const FlightSearch = () => {
  const [formData, setFormData] = useState({
    tripType: "oneWay", // Default trip type
    departureAirport: "",
    arrivalAirport: "",
    departureDate: "2025-04-05",
    returnDate: "",
    passengers: 1,
  });

  const navigate = useNavigate();

  // Handle changes in input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass form data via state while navigating to the /flights page
    navigate("/flights", { state: { searchData: formData } });
  };

  const offers = [
    {
      title: "Summer Escape Sale",
      description: "Enjoy up to 30% off on flights to tropical destinations this summer!",
      image: Weekened ,
    },
    {
      title: "Weekend Getaway Deals",
      description: "Book now and save on your quick weekend trips. Offer valid till Sunday!",
      image: SummerEscape ,
    },
    {
      title: "Business Class Discount",
      description: "Exclusive 20% off on business class tickets for a luxurious journey.",
      image: BusinessClass ,
    },
  ];

  return (
    <>
      {/* Flight Search Container */}
      <div className="flight-search-container">
        {/* Form Section */}
        <div className="form-section">
          <form onSubmit={handleSubmit} className="flight-search-form">
            <div className="trip-type">
              <button
                type="button"
                className={`trip-button ${
                  formData.tripType === "oneWay" ? "active" : ""
                }`}
                onClick={() => setFormData({ ...formData, tripType: "oneWay" })}
              >
                One Way
              </button>
              <button
                type="button"
                className={`trip-button ${
                  formData.tripType === "roundTrip" ? "active" : ""
                }`}
                onClick={() => setFormData({ ...formData, tripType: "roundTrip" })}
              >
                Round Trip
              </button>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>
                  <MdFlightTakeoff
                    style={{ marginRight: "5px", verticalAlign: "middle" }}
                  />
                  From
                </label>
                <select
                  name="departureAirport"
                  value={formData.departureAirport}
                  onChange={handleChange}
                  className="dropdown"
                >
                  <option value="">Select departure airport</option>
                  <option value="JFK">JFK (New York)</option>
                  <option value="LAX">LAX (Los Angeles)</option>
                  <option value="ORD">ORD (Chicago)</option>
                </select>
              </div>
              <div className="form-group">
                <label>
                  <MdFlightLand
                    style={{ marginRight: "5px", verticalAlign: "middle" }}
                  />
                  To
                </label>
                <select
                  name="arrivalAirport"
                  value={formData.arrivalAirport}
                  onChange={handleChange}
                  className="dropdown"
                >
                  <option value="">Select arrival airport</option>
                  <option value="LHR">LHR (London)</option>
                  <option value="CDG">CDG (Paris)</option>
                  <option value="NRT">NRT (Tokyo)</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>
                <CiCalendarDate style={{ marginRight: "4px", verticalAlign: "middle" }}
                 />
                  Departure Date
                  </label>
                <input
                  type="date"
                  name="departureDate"
                  value={formData.departureDate}
                  onChange={handleChange}
                  className="date-input"
                />
              </div>

              {formData.tripType === "roundTrip" && (
                <div className="form-group">
                  <label>
                  <CiCalendarDate style={{ marginRight: "4px", verticalAlign: "middle" }}
                 />
                    Return Date</label>
                  <input
                    type="date"
                    name="returnDate"
                    value={formData.returnDate}
                    onChange={handleChange}
                    className="date-input"
                  />
                </div>
              )}

              <div className="form-group">
                <label>
                 <IoPersonAddSharp style={{ marginRight: "4px", verticalAlign: "middle" }}
                 />
                  Passengers</label>
                <select
                  name="passengers"
                  value={formData.passengers}
                  onChange={handleChange}
                  className="dropdown"
                >
                  <option value="1">1 Passenger</option>
                  <option value="2">2 Passengers</option>
                  <option value="3">3 Passengers</option>
                </select>
              </div>
            </div>

            <button type="submit" className="search-button">
              Search Flights
            </button>
          </form>
        </div>
      </div>

      {/* Offers Section */}
      <div className="offers-section">
        <h2 className="offers-title">Exclusive Offers</h2>
        <div className="offers-grid">
          {offers.map((offer, index) => (
            <div className="offer-card" key={index}>
              <img
                src={offer.image}
                alt={offer.title}
                className="offer-image"
              />
              <div className="offer-content">
                <h3 className="offer-title">{offer.title}</h3>
                <p className="offer-description">{offer.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AboutPage */}
      <div className="about-section">
        <AboutPage />
      </div>

      {/* ContactPage */}
      <div className="contact-section">
        <ContactPage />
      </div>

      {/* Footer section */}
      <div className="footer-section">
        <Footer />
        </div>
    </>
  );
};

export default FlightSearch;
