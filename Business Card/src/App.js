import React from "react";
import About from "../components/About";
import Image from "../components/Image";
import SocialAccounts from "../components/SocialAccounts";
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
