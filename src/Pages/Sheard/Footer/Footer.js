import React from "react";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer className='d-flex justify-content-center bg-dark text-white mt-3'>
      <p className="m-3">
        <small>Copywrite © {year} Sarah Enterprise</small>
      </p>
    </footer>
  );
};

export default Footer;
