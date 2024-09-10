import React, { useState } from "react";
import "./home.css";
import Button from "react-bootstrap/Button";

const Home = () => {
  const [phoneNumber, setPhoneNumber] = useState(``);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const API_KEY = `403638c82ea56a812a38320d90e331f6`;

  const validatePhoneNumber = () => {
    const url = `http://apilayer.net/api/validate?access_key=${API_KEY}&number=${phoneNumber}`;

    setResult(null);
    setError(null);

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`No response`);
        }
        return response.json();
      })
      .then((data) => {
        if (data.success === false) {
          throw new Error(data.error.info || "Error validating phone number");
        }
        setResult(data);
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
        setResult(null);
      });
  };

  const styleHeader = {
    color: "#d69e02",
    fontSize: "5rem",
    position: "top",
  };

  const styleTitle = {
    color: "#d69e02",
    fontSize: "2rem",
    position: "top",
  };

  const styleButton = {
    paddig: "1rem",
    color: "forrestGreen",
    margin: "20px",
  };

  const styleInp = {
    color: "green",
    fontSize: "2rem",
    borderStyle: "green 3px solid",
    margin: "10px",
  };

  const styleText = {
    color: "green",
    fontSize: "1.5rem",
    bacgrondColor: "#80808045",
  };

  return (
    <div>
      <h1 style={styleHeader}>International Phone Validator</h1>
      <input
        type="text"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        placeholder="Enter Phone Number"
        style={styleInp}
      />
      <Button
        variant="outline-success"
        onClick={validatePhoneNumber}
        style={styleButton}
      >
        Validate number
      </Button>{" "}
      {error && <p style={{ color: `red` }}>{error}</p>}
      {result && (
        <div>
          <h2 style={styleTitle}>Validation Result:</h2>
          <p style={styleText}>
            <strong>Country:</strong> {result.country_name}
          </p>
          <p style={styleText}>
            <strong>Location:</strong> {result.location}
          </p>
          <p style={styleText}>
            <strong>Carrier:</strong> {result.carrier}
          </p>
          <p style={styleText}>
            <strong>Line Type:</strong> {result.line_type}
          </p>
          <p style={styleText}>
            <strong>Valid:</strong> {result.valid ? "Yes" : "No"}
          </p>
        </div>
      )}
    </div>
  );
};

export default Home;
