import React, { useState } from "react";
import { jsPDF } from "jspdf";
import "./TicketPage.css";

const TicketPage = () => {
  const [ticketDetails, setTicketDetails] = useState({
    name: "John Doe",
    flightNo: "FV1234",
    departure: "2025-04-07 10:00 AM",
    arrival: "2025-04-07 02:00 PM",
    source: "New York (JFK)",
    destination: "Los Angeles (LAX)",
    seatNo: "12A",
    status: "Confirmed",
  });

  // Function to handle ticket modification
  const handleModify = () => {
    const modifiedDetails = prompt("Enter new details in JSON format (e.g., {\"seatNo\":\"15B\"}):");
    try {
      const parsedDetails = JSON.parse(modifiedDetails);
      setTicketDetails({ ...ticketDetails, ...parsedDetails });
      alert("Ticket details updated successfully!");
    } catch (error) {
      alert("Invalid JSON format. Please try again.");
    }
  };

  // Function to handle ticket cancellation
  const handleCancel = () => {
    if (window.confirm("Are you sure you want to cancel your ticket?")) {
      setTicketDetails({ ...ticketDetails, status: "Cancelled" });
      alert("Your ticket has been cancelled.");
    }
  };

  // Function to handle ticket download
  const handleDownload = () => {
    const doc = new jsPDF();
    doc.setFont("helvetica", "bold");
    doc.text("FlyVista Airlines Ticket", 10, 10);
    doc.setFont("helvetica", "normal");
    doc.text(`Name: ${ticketDetails.name}`, 10, 30);
    doc.text(`Flight No: ${ticketDetails.flightNo}`, 10, 40);
    doc.text(`Departure: ${ticketDetails.departure}`, 10, 50);
    doc.text(`Arrival: ${ticketDetails.arrival}`, 10, 60);
    doc.text(`Source: ${ticketDetails.source}`, 10, 70);
    doc.text(`Destination: ${ticketDetails.destination}`, 10, 80);
    doc.text(`Seat No: ${ticketDetails.seatNo}`, 10, 90);
    doc.text(`Status: ${ticketDetails.status}`, 10, 100);
    doc.save(`Ticket_${ticketDetails.flightNo}_${ticketDetails.name}.pdf`);
  };

  return (
    <div className="ticket-page">
      <h1>Ticket Details</h1>
      <div className="ticket-card">
        <h2>FlyVista Airlines</h2>
        <p>
          <strong>Name:</strong> {ticketDetails.name}
        </p>
        <p>
          <strong>Flight No:</strong> {ticketDetails.flightNo}
        </p>
        <p>
          <strong>Departure:</strong> {ticketDetails.departure}
        </p>
        <p>
          <strong>Arrival:</strong> {ticketDetails.arrival}
        </p>
        <p>
          <strong>Source:</strong> {ticketDetails.source}
        </p>
        <p>
          <strong>Destination:</strong> {ticketDetails.destination}
        </p>
        <p>
          <strong>Seat No:</strong> {ticketDetails.seatNo}
        </p>
        <p>
          <strong>Status:</strong> {ticketDetails.status}
        </p>
        <div className="ticket-actions">
          <button className="download-btn" onClick={handleDownload}>
            Download Ticket
          </button>
          <button className="modify-btn" onClick={handleModify}>
            Modify Ticket
          </button>
          <button className="cancel-btn" onClick={handleCancel}>
            Cancel Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketPage;
