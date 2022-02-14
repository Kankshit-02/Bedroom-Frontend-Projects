import React from "react";
import About from "./About";
import Image from "./Image";
import SocialAccounts from "./SocialAccounts";
import "./styles.css";
export default function App() {
  return (
    <div className="SupremeContainer">
      <div className="MajorElements">
        <Image />
        <About />
        <SocialAccounts />
      </div>
    </div>
  );
}
