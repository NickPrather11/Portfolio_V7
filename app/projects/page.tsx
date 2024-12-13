import React from "react";
import Center from "../components/Center";
import dbProjectsSeed, { IProject } from "../db/seeds/dbProjectsSeed";
import CardLink from "../components/CardLink";
import Page from "../page";
import Card from "../components/Card";

const ProjectsPage = () => {
  const projects: IProject[] = dbProjectsSeed;
  return (
    <ul className="flex flex-col justify-center items-center md:flex-row md:flex-wrap">
      {projects.map((project: IProject, index: number) => (
        <li key={index}>
          <Center>
            <CardLink
              href={`/projects/${project.slug}`}
              target="_self"
              className=""
              title={project.title}
              description={project.descriptionShort}
              childImgPath={project.imgPath}
            />
          </Center>
        </li>
      ))}
      <li className="mt-8">
        <Card>
          <h4 className="text-nowrap m-0">More Projects Coming Soon</h4>
        </Card>
      </li>
    </ul>
  );
};

export default ProjectsPage;
