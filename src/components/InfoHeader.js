import React from "react";
import Logo from "./Logo";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { ImLocation } from "react-icons/im";
export default function InfoHeader() {
  const iconsSize = 30;
  return (
    <div
      style={{
        backgroundColor: "white",
        display: "flex",
        width: "100%",
        padding: 0,
        margin: 0,
        justifyContent: "space-around",
      }}
    >
      <Logo></Logo>
      <div>
        <BsFillTelephoneFill color="blue" size={iconsSize} />
      </div>
      <div>
        <MdEmail color="blue" size={iconsSize} />
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <ImLocation color="blue" size={iconsSize} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <>Call Anytime 24/7</>
          <p>Call Anytime 24/7</p>
        </div>
      </div>
    </div>
  );
}
