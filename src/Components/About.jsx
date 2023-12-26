/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/Webinar Room.jpg";

const imageAltText = "UCP Webinar Room";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "Hi,\nI'm Anam, a coding enthusiast with a dash of caffeine-fueled wit!\nWeb Dev: Journey with me as I craft web wonders with HTML and CSS.\nAI/ML: From AI to ML, I'm decoding the future one algorithm at a time.\nStay tuned, because bugs and bytes, I'm embracing them all!";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Microsoft Learn Student Ambassador",
  "Machine Learning Engineer",
  "Compputer Science Student",
  "Marketing Enthusiast",
  "Blog Writer",
  "Graphic design",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "Meh? A passionate and dynamic Computer Science student with a flair for creativity and a love for exploring the vast world of technology. I believe that in the intersection of art and innovation lies the potential to create something truly magical!\nWhat I Do? As a Computer Science enthusiast, I immerse myself in the realms of coding, problem-solving, and all things tech. My passion for understanding the latest trends and technologies drives me to excel in this ever-evolving field.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
