import React, { useState } from "react";
import "./AdminPage.css"; // Add relevant styles
import { TextField, Button, Box, Typography } from "@mui/material";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import { IconButton } from '@mui/material';

const AdminPage = () => {
  const [selectedOption, setSelectedOption] = useState(""); // State to track selected sidebar option

  const handleMenuClick = (option) => {
    setSelectedOption(option); // Update the state based on selected option
    console.log(`Selected option: ${option}`);
  };

 const renderAddAirport = () => (
    <div className="add-airport-container">
      <Typography variant="h4" className="title">
        Add Airport
      </Typography>
      <form className="form">
        <Box className="form-field">
          <TextField
            label="Airport Name"
            variant="outlined"
            fullWidth
            placeholder="Enter Airport Name"
          />
        </Box>
        <Box className="form-field">
          <TextField
            label="Airport Location"
            variant="outlined"
            fullWidth
            placeholder="Enter Airport Location"
          />
        </Box>
        <Box className="form-field">
          <TextField
            label="Airport Code"
            variant="outlined"
            fullWidth
            placeholder="Enter Airport Code"
          />
        </Box>
        <Box className="form-field">
          <TextField
            label="Airport Address"
            variant="outlined"
            fullWidth
            placeholder="Enter Airport Address"
          />
        </Box>
        <Button
          variant="contained"
          color="primary"
          className="submit-button"
          type="submit"
        >
          Add Airport
        </Button>
      </form>
    </div>
  );

  const renderAddAirplane = () => (
    <div className="add-airplane-container">
      <Typography variant="h4" className="title">
        Add Airplane
      </Typography>
      <form className="form">
        <Box className="form-field">
          <TextField
            label="Airplane Name"
            variant="outlined"
            fullWidth
            placeholder="Enter Airplane Name"
          />
        </Box>
        <Box className="form-field">
          <TextField
            label="Airplane Model"
            variant="outlined"
            fullWidth
            placeholder="Enter Airplane Model"
          />
        </Box>
        <Box className="form-field">
          <TextField
            label="Capacity"
            variant="outlined"
            fullWidth
            placeholder="Enter Capacity"
          />
        </Box>
        <Button
          variant="contained"
          color="primary"
          className="submit-button"
          onClick={() => alert("Airplane Added!")}
        >
          Add Airplane
        </Button>
      </form>
    </div>
  );

  const renderAddFlight = () => (
    <div className="add-flight-container">
      <Typography variant="h4" className="title">
        Add Flight
      </Typography>
      <form className="form">
        <Box className="form-field">
          <TextField
            label="Flight Number"
            variant="outlined"
            fullWidth
            placeholder="Enter Flight Number"
          />
        </Box>
        <Box className="form-field">
          <TextField
            label="Departure Airport"
            variant="outlined"
            fullWidth
            placeholder="Enter Departure Airport"
          />
        </Box>
        <Box className="form-field">
          <TextField
            label="Arrival Airport"
            variant="outlined"
            fullWidth
            placeholder="Enter Arrival Airport"
          />
        </Box>
        <Box className="form-field">
          <TextField
            label="Flight Date"
            variant="outlined"
            type="date"
            fullWidth
            InputLabelProps={{ shrink: true }} // Ensures the label stays above the input when a date is selected
          />
        </Box>
        <Button
          variant="contained"
          color="primary"
          className="submit-button"
          onClick={() => alert("Flight Added!")}
        >
          Add Flight
        </Button>
      </form>
    </div>
  );
  // Render content for "View Airport"

  const renderViewAirport = () => {
    const airports = [
      { name: 'Example Airport Name', location: 'Example Location', code: 'EXA123', address: '123 Airport Rd, Example City' },
      { name: 'Another Example Airport Name', location: 'Another Location', code: 'ANX456', address: '456 Another Rd, Another City' },
    ];
  
    return (
      <div className="view-airport-container">
        <Typography variant="h4" className="title">View Airports</Typography>
        <TableContainer className="table-container">
          <Table>
          <TableHead sx={{ backgroundColor: '#487ce1' }}>
          <TableRow>
                <TableCell sx={{color: 'white'}}>Airport Name</TableCell>
                <TableCell sx={{color: 'white'}}>Location</TableCell>
                <TableCell sx={{color: 'white'}}>Airport Code</TableCell>
                <TableCell sx={{color: 'white'}}>Airport Address</TableCell>
                <TableCell sx={{color: 'white'}}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {airports.map((airport, index) => (
                <TableRow key={index}>
                  <TableCell>{airport.name}</TableCell>
                  <TableCell>{airport.location}</TableCell>
                  <TableCell>{airport.code}</TableCell>
                  <TableCell>{airport.address}</TableCell>
                  <TableCell>
                    <IconButton
                      color="primary"
                      className="action-icon"
                      onClick={() => alert(`Editing ${airport.name}`)}
                    >
                      <Edit />
                    </IconButton>
                    <IconButton
                      color="secondary"
                      className="action-icon"
                      onClick={() => alert(`Deleting ${airport.name}`)}
                    >
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  };
  
  const renderViewAirplane = () => {
    const airplanes = [
      { name: 'Example Airplane Name', model: 'Model X', capacity: 200 },
      { name: 'Another Example Airplane Name', model: 'Model Y', capacity: 300 },
    ];
  
    return (
      <div className="view-airplane-container">
        <Typography variant="h4" className="title">View Airplanes</Typography>
        <TableContainer className="table-container">
          <Table>
          <TableHead sx={{ backgroundColor: '#487ce1' }}>
          <TableRow>
                <TableCell sx={{color: 'white'}}>Airplane Name</TableCell>
                <TableCell sx={{color: 'white'}}>Model</TableCell>
                <TableCell sx={{color: 'white'}}>Capacity</TableCell>
                <TableCell sx={{color: 'white'}}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {airplanes.map((airplane, index) => (
                <TableRow key={index}>
                  <TableCell>{airplane.name}</TableCell>
                  <TableCell>{airplane.model}</TableCell>
                  <TableCell>{airplane.capacity}</TableCell>
                  <TableCell>
                    <IconButton
                      color="primary"
                      className="action-icon"
                      onClick={() => alert(`Editing ${airplane.name}`)}
                    >
                      <Edit />
                    </IconButton>
                    <IconButton
                      color="secondary"
                      className="action-icon"
                      onClick={() => alert(`Deleting ${airplane.name}`)}
                      style={{ marginLeft: '10px' }}
                    >
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  };

const renderViewFlight = () => {
  const flights = [
    { flightNumber: 'X123', departure: 'Airport A', arrival: 'Airport B', date: '2025-05-01' },
    { flightNumber: 'Y456', departure: 'Airport C', arrival: 'Airport D', date: '2025-06-10' },
  ];

  return (
    <div className="view-flight-container">
      <Typography variant="h4" className="title">View Flights</Typography>
      <TableContainer className="table-container">
        <Table>
        <TableHead sx={{ backgroundColor: '#487ce1' }}>
            <TableRow>
              <TableCell sx={{color: 'white'}}>Flight Number</TableCell>
              <TableCell sx={{color: 'white'}}>Departure Airport</TableCell>
              <TableCell sx={{color: 'white'}}>Arrival Airport</TableCell>
              <TableCell sx={{color: 'white'}}>Flight Date</TableCell>
              <TableCell sx={{color: 'white'}}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {flights.map((flight, index) => (
              <TableRow key={index}>
                <TableCell>{flight.flightNumber}</TableCell>
                <TableCell>{flight.departure}</TableCell>
                <TableCell>{flight.arrival}</TableCell>
                <TableCell>{flight.date}</TableCell>
                <TableCell>
                  <IconButton
                    color="primary"
                    className="action-icon"
                    onClick={() => alert(`Editing flight ${flight.flightNumber}`)}
                  >
                    <Edit />
                  </IconButton>
                  <IconButton
                    color="secondary"
                    className="action-icon"
                    onClick={() => alert(`Deleting flight ${flight.flightNumber}`)}
                    style={{ marginLeft: '10px' }}
                  >
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

  const renderViewFlightBooking = () => {
    const bookings = [
      { flight: 'Flight X', passenger: 'John Doe' },
      { flight: 'Flight Y', passenger: 'Jane Smith' },
    ];
  
    return (
      <div className="view-flight-booking-container">
<Typography variant="h4" className="title">
  View Flights Booking
</Typography>
        <TableContainer className="table-container">
          <Table>
          <TableHead sx={{ backgroundColor: '#487ce1' }}>
          <TableRow>
                <TableCell sx={{color: 'white'}}>Flight</TableCell>
                <TableCell sx={{color: 'white'}}>Passenger</TableCell>
                <TableCell sx={{color: 'white'}}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {bookings.map((booking, index) => (
                <TableRow key={index}>
                  <TableCell>{booking.flight}</TableCell>
                  <TableCell>{booking.passenger}</TableCell>
                  <TableCell>
                    <IconButton
                      color="primary"
                      className="action-icon"
                      onClick={() => alert(`Editing booking for ${booking.passenger}`)}
                    >
                      <Edit />
                    </IconButton>
                    <IconButton
                      color="secondary"
                      className="action-icon"
                      onClick={() => alert(`Deleting booking for ${booking.passenger}`)}
                      style={{ marginLeft: '10px' }}
                    >
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  };
    

  return (
    <div className="admin-page-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>Admin Dashboard</h2>
        <ul>
          <li onClick={() => handleMenuClick("Add Airport")}>Add Airport</li>
          <li onClick={() => handleMenuClick("Add Airplane")}>Add Airplane</li>
          <li onClick={() => handleMenuClick("Add Flight")}>Add Flight</li>
          <li onClick={() => handleMenuClick("View Airplane")}>
            View Airplane
          </li>
          <li onClick={() => handleMenuClick("View Airport")}>View Airport</li>
          <li onClick={() => handleMenuClick("View Flights")}>View Flights</li>
          <li onClick={() => handleMenuClick("View Flight Booking")}>
            View Flight Booking
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {selectedOption === "Add Airport" && renderAddAirport()}
        {selectedOption === "Add Airplane" && renderAddAirplane()}
        {selectedOption === "View Airplane" && renderViewAirplane()}
        {selectedOption === "View Airport" && renderViewAirport()}
        {selectedOption === "Add Flight" && renderAddFlight()}
        {selectedOption === "View Flights" && renderViewFlight()}
        {selectedOption === "View Flight Booking" && renderViewFlightBooking()}
        {!selectedOption && <h2>Please select an option from the sidebar</h2>}
      </div>
    </div>
  );
};

export default AdminPage;
