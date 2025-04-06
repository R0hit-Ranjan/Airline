import React from "react";
import { Link } from "react-router-dom";
import { GiCommercialAirplane } from "react-icons/gi";


const Header = () => {
  return (
    <header style={styles.header}>
      <div
        style={styles.logo}
        onClick={() => window.location.reload()}
        className="logo-refresh"
      >
        <GiCommercialAirplane size={34} style={{ marginRight: "10px" }} />
        <span>FlyVista</span>
      </div>
      <nav style={styles.nav}>
        <Link to="/" style={styles.link}>
          Home
        </Link>
        <Link to="/about" style={styles.link}>
          About 
        </Link>
        <Link to="/contact" style={styles.link}>
          Contact
        </Link>
        <Link to="/login" style={styles.link}>
          Login
        </Link>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 20px",
    backgroundColor: "#0073e6",
    color: "#ffffff",

  },
  logo: {
    display: "flex",
    alignItems: "center",
    fontSize: "24px",
    fontWeight: "bold",
    color: "#ffffff",
  },
  nav: {
    fontFamily: "'Roboto', sans-serif",
    fontWeight: "500",
    fontSize: "18px",
    display: "flex",
    gap: "15px",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: "500",
  },
};

export default Header;
