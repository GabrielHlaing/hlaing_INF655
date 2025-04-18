import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer">
      <p><i>Get Connected with our network.</i></p>
      <p>&copy; 2025 preserved</p>
      <div id="icons">
        <FaFacebook size={30} />
        <FaInstagram size={30} />
        <FaTwitter size={30} />
      </div>
    </div>
  );
}