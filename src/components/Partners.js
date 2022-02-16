import React from "react";
import grandLyon from "../images/grand-lyon.png";
import gaumont from "../images/gaumon1.PNG";
import ffmLogo from "../images/ffmLogo.png";
import epsilon from "../images/epsilon.png";
import synergie from "../images/synergie.png";
import vaulx from "../images/vaulx.png";

const Partners = () => {
  return (
    <>
      <div className="partners lg:flex lg:items-center lg:center   mb-10 mt-10">
        <div>
          <img className="h-12 m-2 mr-4 " src={synergie} alt="grandLyon logo" />
        </div>
        <div>
          <img className="h-12 m-2 mr-4 " src={ffmLogo} alt="grandLyon logo" />
        </div>
        <div>
          <img
            className="h-18 w-32 m-2 mr-4 "
            src={grandLyon}
            alt="grandLyon logo"
          />
        </div>
        <div>
          <img
            className="h-16  w-40  m-2 mr-4 "
            src={gaumont}
            alt="grandLyon logo"
          />
        </div>
        <div>
          <img className="h-20 m-2 mr-4 " src={epsilon} alt="grandLyon logo" />
        </div>
        <div>
          <img className="h-22 m-2 " src={vaulx} alt="grandLyon logo" />
        </div>
      </div>
      {/* responsive */}
      <div className="partnersResponsive grid grid-cols-2 gap-4 ">
        <div>
          <img className="h-12 m-2 mr-4 " src={synergie} alt="grandLyon logo" />
        </div>
        <div>
          <img className="h-12 m-2 mr-4 " src={ffmLogo} alt="grandLyon logo" />
        </div>
        <div>
          <img
            className="h-16  w-38  m-2 mr-4 cursor-pointer"
            src={gaumont}
            alt="grandLyon logo"
          />
        </div>
        <div>
          {" "}
          <img
            className="h-18 w-32 m-2 mr-4 "
            src={grandLyon}
            alt="grandLyon logo"
          />
        </div>
        <div>
          <img className="h-20 m-2 mr-4 " src={epsilon} alt="grandLyon logo" />
        </div>
        <div>
          <img
            className="h-22 m-2 cursor-pointer"
            src={vaulx}
            alt="grandLyon logo"
          />
        </div>
      </div>
    </>
  );
};

export default Partners;
