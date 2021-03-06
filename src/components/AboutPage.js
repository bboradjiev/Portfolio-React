import React from "react";
import RenderList from "./RenderList";
import Fade from "react-reveal/Fade";

function AboutPage({ tools, hobbies }) {
  return (
    <section className="about-section">
      <Fade left duration={1000}>
        <div className="about">
          <h1>&lt;ABOUT/&gt;</h1>

          <div className="Hero-pic"></div>

          <p className="info">
            Hi I'm Bojidar, and I'm an aspiring Web Developer located in Sofia
            Bulgaria. I'm deeply interested in software development, I'm
            creative, highly motivated, eager to learn and open for the
            opportunity to begin my career as a web developer.
          </p>
        </div>
      </Fade>
      <Fade right duration={1000}>
        <div className="toolkit-section">
          <div className="toolkit">
            <h1>&lt;TOOLKIT/&gt;</h1>
            <ul className="toolkit-items">
              {tools.map((tool, index) => (
                <RenderList key={index} el={tool} />
              ))}
            </ul>
          </div>

          <div className="hobbies-section">
            <h1>&lt;HOBIES && INTERESTS/&gt;</h1>
            <ul className="hobbies-items">
              {hobbies.map((hobbie, index) => (
                <RenderList key={index} el={hobbie} />
              ))}
            </ul>
          </div>
        </div>
      </Fade>
    </section>
  );
}

export default AboutPage;
