import React from "react";

const Footer = () => {
  return (
    <div className="mt-10">
      <footer className="footer p-10 bg-base-200 text-base-content">
        <div>
          <img
            style={{ height: "100px" }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR485keS9xHM3w10gXwrXY9X9PIuBR-t-CEQw&usqp=CAU"
            alt=""
          />
          <p className="text-2xl font-bold">Softic Blog</p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a href="" className="link link-hover">
            Branding
          </a>
          <a href="" className="link link-hover">
            Design
          </a>
          <a href="" className="link link-hover">
            Marketing
          </a>
          <a href="" className="link link-hover">
            Advertisement
          </a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a href="" className="link link-hover">
            About us
          </a>
          <a href="" className="link link-hover">
            Contact
          </a>
          <a href="" className="link link-hover">
            Jobs
          </a>
          <a href="" className="link link-hover">
            Press kit
          </a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a href="" className="link link-hover">
            Terms of use
          </a>
          <a href="" className="link link-hover">
            Privacy policy
          </a>
          <a href="" className="link link-hover">
            Cookie policy
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
