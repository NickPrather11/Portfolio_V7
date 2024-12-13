import React from "react";

const LanguagesAndTech = ({ ...props }: any) => {
  return (
    <div className="flex flex-col" {...props}>
      <h3>Languages & Tech</h3>
      <div id="languages" className="">
        <h4>Programming Languages</h4>
        <ul className="list-disc pl-4 [&_ul]:list-[revert]">
          <li>JavaScript</li>
          <li>SQL</li>
          <li>XML</li>
          <li>TypeScript</li>
          <li>C#</li>
          <li>Python</li>
          <li>Java</li>
          <li>C++</li>
        </ul>
      </div>
      <br></br>
      <div id="languages" className="">
        <h4>Technologies</h4>
        <ul className="list-disc pl-4 [&_ul]:list-[revert]">
          <li>Ajax</li>
          <li>API</li>
          <li>Boostrap</li>
          <li>Camtasia</li>
          <li>CSS</li>
          <li>Express.JS</li>
          <li>Firebase</li>
          <li>Git</li>
          <li>Handlebars.JS</li>
          <li>Heroku</li>
          <li>HTML</li>
          <li>JIRA</li>
          <li>JQuery</li>
          <li>JSON</li>
          <li>LucidChart</li>
          <li>Materialize</li>
          <li>MongoDB</li>
          <li>Mongoose</li>
          <li>.NET</li>
          <li>Next.JS</li>
          <li>Node.JS</li>
          <li>npm/npx</li>
          <li>OAuth</li>
          <li>Periscope/Sisense</li>
          <li>Postman</li>
          <li>React.JS</li>
          <li>RestSharp</li>
          <li>Selenium</li>
          <li>Sequelize</li>
          <li>Tailwind CSS</li>
          <li>Trello</li>
          <li>ZOHO</li>
          <li>Various Audio Recording Applications</li>
        </ul>
      </div>
    </div>
  );
};

export default LanguagesAndTech;
