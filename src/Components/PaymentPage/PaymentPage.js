import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PaymentPage.css';
import {
  Box,
  TextField,
  Button,
  Typography,
  Grid,
  Card,
  CardContent,
  Divider,
} from '@mui/material';

const PaymentPage = () => {
  const navigate = useNavigate(); // React Router navigation hook

  const handlePayment = () => {
    // Simulate payment success
    alert('Payment Successful! Redirecting to your ticket...');
    navigate('/TicketPage'); // Redirect to TicketPage after payment
  };

  return (
    <Box className="payment-page">
      <Typography variant="h4" className="title">
        FlyVista Payment
      </Typography>

      <Grid container spacing={4}>
        {/* Billing and Card Info */}
        <Grid item xs={12} md={7}>
          <Card className="card-section">
            <CardContent>
              <Typography variant="h6" className="section-title">
                Billing Information
              </Typography>

              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="First Name" required />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Last Name" required />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth label="Email Address" required />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth label="Address" required />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="City" required />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="ZIP / Postal Code" required />
                </Grid>
              </Grid>

              <Divider className="divider" />

              <Typography variant="h6" className="section-title">
                Card Details
              </Typography>

              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField fullWidth label="Card Number" required />
                </Grid>
                <Grid item xs={6}>
                  <TextField fullWidth label="Expiry Date (MM/YY)" required />
                </Grid>
                <Grid item xs={6}>
                  <TextField fullWidth label="CVV" required />
                </Grid>
              </Grid>

              <Box sx={{ mt: 4 }}>
                <Button
                  fullWidth
                  variant="contained"
                  className="pay-btn"
                  onClick={handlePayment} // Call payment handler on click
                >
                  Pay Now
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Summary Section */}
        <Grid item xs={12} md={5}>
          <Card className="summary-section">
            <CardContent>
              <Typography variant="h6" className="section-title">
                Payment Summary
              </Typography>
              <Divider className="divider" />

              <Box className="summary-row">
                <Typography>Flight</Typography>
                <Typography>$400</Typography>
              </Box>
              <Box className="summary-row">
                <Typography>Taxes</Typography>
                <Typography>$50</Typography>
              </Box>
              <Box className="summary-row total">
                <Typography>Total</Typography>
                <Typography>$450</Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PaymentPage;
