import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Box,
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Paper,
} from "@mui/material";

const BookFlight = () => {
  const navigate = useNavigate(); // ✅ moved inside component
  const { state } = useLocation();
  const selectedFlight = state?.flight || {};

  const [passengerDetails, setPassengerDetails] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    seatNo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPassengerDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to PaymentPage and pass data
    navigate("/payment", {
      state: {
        passengerDetails,
        selectedFlight,
      },
    });
  };

  return (
    <Box
      sx={{
        fontFamily: "Arial, sans-serif",
        padding: 4,
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h4" mb={3}>
        Book Flight
      </Typography>

      {/* Flight Info */}
      <Paper
        elevation={4}
        sx={{
          backgroundColor: "#004aad",
          color: "white",
          padding: 2,
          borderRadius: 2,
          textAlign: "center",
          width: { xs: "100%", sm: "80%", md: "60%" },
          mb: 3,
        }}
      >
        <Typography variant="h6" gutterBottom>
          Flight Details
        </Typography>
        <Box component="table" sx={{ width: "100%", mt: 1 }}>
          <tbody>
            <tr>
              <td>Flight No:</td>
              <td>{selectedFlight.flightNo}</td>
            </tr>
            <tr>
              <td>Airplane:</td>
              <td>{selectedFlight.airplane}</td>
            </tr>
            <tr>
              <td>Departure:</td>
              <td>{selectedFlight.departure}</td>
            </tr>
            <tr>
              <td>Arrival:</td>
              <td>{selectedFlight.arrival}</td>
            </tr>
            <tr>
              <td>Source:</td>
              <td>{selectedFlight.source}</td>
            </tr>
            <tr>
              <td>Destination:</td>
              <td>{selectedFlight.destination}</td>
            </tr>
            <tr>
              <td>Status:</td>
              <td>{selectedFlight.status}</td>
            </tr>
          </tbody>
        </Box>
      </Paper>

      {/* Passenger Form */}
      <Paper
        elevation={4}
        sx={{
          padding: 4,
          borderRadius: 2,
          backgroundColor: "#fff",
          width: { xs: "100%", sm: "80%", md: "50%" },
        }}
      >
        <Typography variant="h5" mb={2} textAlign="center">
          Passenger Information
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box mb={2}>
            <TextField
              label="Name"
              name="name"
              fullWidth
              required
              value={passengerDetails.name}
              onChange={handleChange}
            />
          </Box>
          <Box mb={2}>
            <TextField
              label="Email"
              name="email"
              type="email"
              fullWidth
              required
              value={passengerDetails.email}
              onChange={handleChange}
            />
          </Box>
          <Box mb={2}>
            <TextField
              label="Phone"
              name="phone"
              type="tel"
              fullWidth
              required
              value={passengerDetails.phone}
              onChange={handleChange}
            />
          </Box>
          <Box mb={2}>
            <TextField
              label="Address"
              name="address"
              fullWidth
              required
              multiline
              rows={3}
              value={passengerDetails.address}
              onChange={handleChange}
            />
          </Box>
          <Box mb={3}>
            <FormControl fullWidth required>
              <InputLabel>Select Seat</InputLabel>
              <Select
                name="seatNo"
                value={passengerDetails.seatNo}
                onChange={handleChange}
                label="Select Seat"
              >
                <MenuItem value="1A">1A</MenuItem>
                <MenuItem value="1B">1B</MenuItem>
                <MenuItem value="2A">2A</MenuItem>
                <MenuItem value="2B">2B</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: "#ff5918",
              "&:hover": {
                backgroundColor: "#e04e16",
              },
              paddingY: 1.2,
              fontWeight: "bold",
            }}
          >
            Confirm Booking
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default BookFlight;
