import React from "react";
import Bounce from "react-reveal/Bounce";

function HomePage() {
  return (
    <div className="homepage">
      <Bounce top duration={2500}>
        <h1>Hi, I'm Bojidar</h1>
        <h3>Web Developer</h3>
        <br />
        <p>Look around and learn more about me.</p>

        <div className="contact-items">
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/bojidar-boradjiev-007a0662/"
          >
            {" "}
            <img
              src="/images/icons/icons8-linkedin-96 (1).png"
              alt="Linkedin Icon"
            />
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/bboradjiev"
          >
            {" "}
            <img src="/images/icons/github-sign.png" alt="Github Ivon" />
          </a>
        </div>
      </Bounce>
    </div>
  );
}

export default HomePage;
