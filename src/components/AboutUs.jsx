import React from "react";

function AboutUs() {
  const styleHeader = {
    color: "#e29d08",
    fontSize: "5rem",
  };

  const stylePara = {
    color: " green",
    fontSize: "3em",
  };
  const styleP = {
    color: " green",
    fontSize: "1.5em",
  };

  return (
    <div>
      <h1 style={styleHeader}>About Us</h1>
      <p style={stylePara}>Welcome to the International Phone Book app!</p>
      <p style={styleP}>
        This app allows you to validate phone numbers globally
      </p>
      <p></p>
    </div>
  );
}

export default AboutUs;
