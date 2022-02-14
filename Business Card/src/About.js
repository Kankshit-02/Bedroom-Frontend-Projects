import React from "react";
import "../src/styles.css";

export default function About() {
  return (
    <div className="About">
      <h1 className="Name">Kankshit Majhodkar</h1>
      <div className="Desig">Front-End Developer</div>
      <div className="bio">
        <div className="Aboutbio">
          <h3>About</h3>
          <p>
            I am a frontend developer with a particular interest in making
            things simple and automating daily tasks. I try to keep up with
            security and best practices, and am always looking for new things to
            learn.
          </p>
          <h3>Interests</h3>
          <p>Music Production. Guitar. Coding. Anime</p>
        </div>
      </div>
    </div>
  );
}
