import { Link } from "@mui/material";
import React from "react";
import logoImage from "./../public/Logo.jpg";
export default function Logo() {
  return (
    <Link href="/">
      <div
        style={{
          height: "100%",
        }}
      >
        {
          <img
            src={logoImage}
            alt="logo"
            style={{ borderRadius: 50, maxWidth: 70, maxHeight: 100 }}
          />
        }
      </div>
    </Link>
  );
}
