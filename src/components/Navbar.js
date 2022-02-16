import React from "react";
import logo from "../images/logoWhite.png";
import logoFacebook from "../images/logoFbWhite.png";
import logoInstagram from "../images/logoInstaWhite.png";
import logoLinkedIn from "../images/logoLinkedInWhite.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <div className="lg:flex lg:items-center lg:justify-between ">
        <div className="lg:flex lg:items-center lg:justify-between ml-4 navSocial">
          <div
            onClick={() => {
              window.open("https://www.facebook.com/avaulxcross/", "_blank");
            }}
          >
            <img
              className="h-8 m-2 cursor-pointer"
              src={logoFacebook}
              alt="logo facebook"
            />
          </div>
          <div
            onClick={() => {
              window.open("https://www.instagram.com/a_vaulx_cross/", "_blank");
            }}
          >
            <img
              className="h-8 m-2 cursor-pointer"
              src={logoInstagram}
              alt="logo instagram"
            />
          </div>
          <div
            onClick={() => {
              window.open(
                "https://www.linkedin.com/company/a-vaulx-cross/",
                "_blank"
              );
            }}
          >
            <img
              className="h-8 m-2 cursor-pointer "
              src={logoLinkedIn}
              alt="logo linkedin"
            />
          </div>
        </div>

        <div
          onClick={() => {
            navigate("/");
          }}
        >
          <img
            className="h-28 m-2 cursor-pointer animate"
            src={logo}
            alt="logo vaulx cross"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
