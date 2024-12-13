import React, { ReactNode } from "react";

const curriculum: string[] = [
  "HTML-Git-CSS",
  "CSS-Bootstrap",
  "JavaScript",
  "jQuery",
  "Timers",
  "Ajax",
  "Firebase",
  "Group Project 1: Web app for tracking and rating beers from North Carolina breweries.",
  "Portfolio Update",
  "Node.js",
  "JS Constructors",
  "MySQL",
  "Express.js",
  "Handlebars",
  "Sequelize",
  "Group Project 2: 'Dream Journal' node application utilizing Express, MySQL, Sequelize, Handlebars, and Materialize demonstrating MVC design pattern and Many-to-Many sequelize associations.",
  "Group Project 2 continued",
  "MongoDB-Mongoose",
  "React.js",
  "React.js",
  "React.js",
  "Computer Science Fundamental Concepts: Binary Search, Selection Sort, Insertion Sort, Quick Sort, Lodash, Data Structures",
  "Group Project 3: Socket.io Multiplayer Poker App",
  "Group Project 3",
];

const Education = ({ ...props }: any) => {
  const curriculumItems: ReactNode = curriculum.map(
    (subject: string, index) => {
      return (
        <li className="list-item" key={index}>
          Week {index + 1}: {subject}
        </li>
      );
    }
  );
  return (
    <div className="flex flex-col gap-6" {...props}>
      <h3>Education</h3>
      <div id="bootcamp">
        <div className="flex flex-col md:flex-row md:justify-between 2xl:w-6/12">
          <h4 className="mb-0">Full Stack Developer Certificate</h4>
          <h5 className="align-center">2019</h5>
        </div>
        <p className="italic">
          The Coding Bootcamp at UNC Chapel Hill / Trilogy Education Services
        </p>
        <p className="pt-2">
          6-month, in-person bootcamp covering HTML, CSS, JavaScript, Git,
          MySQL, MERN stack, and more. As this was an intensive course load,
          Nick spent 40-50 hours a week studying both in and out of class.
        </p>
        <div className="pt-2 pl-4">
          <h5 className="py-2">Curriculum</h5>
          <ul className="list-disc pl-4">{curriculumItems}</ul>
        </div>
      </div>
      <div id="college">
        <div className="flex flex-col md:flex-row md:justify-between 2xl:w-6/12">
          <h4 className="mb-0">B.S. in Music Technology</h4>
          <h5 className="align-center">2005 - 2010</h5>
        </div>
        <p className="italic">University of North Carolina at Asheville</p>
        <p className="pt-2 pl-4">
          Bachelor of Science in Music Technology degree coursework focused
          mainly on recording, physics of sound and electronics, and music
          theory. UNC Asheville being a Liberal Arts university, Nick had many
          classes outside of the core curriculum and also pursued studies in
          Electronic Music Composition and Jazz theory and performance for
          guitar and bass guitar, among a wide variety of other courses. During
          his final year at UNC Asheville he interned at Moog Music, Inc.,
          learning analog synthesizer assembly and calibration and building
          specialized guitar pickups and wire harness assemblies for the Moog
          Guitar. This internship transitioned to full-time employment upon
          graduation.
        </p>
      </div>
    </div>
  );
};

export default Education;
