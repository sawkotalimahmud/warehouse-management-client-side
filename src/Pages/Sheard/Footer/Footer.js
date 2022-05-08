import React from "react";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer className='d-flex justify-content-center'>
      <p>
        <small>Copywrite © {year} Plumber David</small>
      </p>
    </footer>
  );
};

export default Footer;
