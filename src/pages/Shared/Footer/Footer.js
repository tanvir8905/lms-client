import React from "react";
import "./Footer.css";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <>
      <div className="d-flex justify-content-evenly">
        <ul className="list-style hover-style" style={{ listStyle: "none" }}>
          <li className="hover-style">
            <h3>Services</h3>
          </li>
          <li>Hair Cut</li>
          <li>Hair Color</li>
          <li>Hair Dry</li>
        </ul>
        <ul className="list-style hover-style" style={{ listStyle: "none" }}>
          <li>
            <h3>Socials</h3>
          </li>
          <li>Facebook</li>
          <li>Youtube</li>
          <li>Instagram</li>
        </ul>
        <ul className="list-style hover-style" style={{ listStyle: "none" }}>
          <li>
            <h3>Contact</h3>
          </li>
          <li>Email</li>
          <li>Blog</li>
          <li>Address</li>
        </ul>
      </div>
      <small>Copyright {year}. All rights reserved.</small>
    </>
  );
};

export default Footer;
