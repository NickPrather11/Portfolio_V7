import React from "react";
import { IProject } from "@/app/db/seeds/dbProjectsSeed";
import Link from "next/link";
import Card from "@/app/components/Card";
import Center from "@/app/components/Center";

const GluttonyGamePage = () => {
  const project: IProject = {
    slug: "gluttony_game",
    imgPath: "/projectImages/Gluttony_Game.PNG",
    hrefDeployed: "https://nickprather11.github.io/gluttony_game/",
    hrefRepo: "https://github.com/NickPrather11/gluttony_game",
    title: "Gluttony! Game",
    descriptionShort: "Memory game with a hedonistic theme. Indulge yourself!",
    descriptionExtended:
      "You will be given a random number at the start of the game. This represents your ideal, transcendental buzz acquired from gobbling down all the items.There are five items displayed that will help you reach your goal, each item worth a random number value. By clicking on the items, your score will increase by this random value. You must reach your goal number to win; going above this number causes you to get sick and lose. Each time the game starts, your goal number and the random values change!",
  };

  return (
    <Center className="flex flex-col mt-4 w-11/12">
      <img src={project.imgPath} alt="" className="w-10/12 lg:w-1/2" />
      <Card className="lg:w-1/2">
        <Link
          href={project.hrefDeployed}
          target="_blank"
          rel="noopener noreferrer"
          className="flex"
        >
          <h2 className="flex-grow-0 mb-4 py-2 px-4 text-nowrap bg-slate-500 rounded-full border-2 border-slate-800 hover:text-slate-300 hover:bg-slate-700">
            {project.title}
          </h2>
        </Link>
        <Link
          href={project.hrefRepo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex"
        >
          <h3 className="flex-grow-0 mb-10 py-2 px-4 bg-slate-500 rounded-full border-2 border-slate-800 hover:text-slate-300 hover:bg-slate-700">
            GitHub Repo
          </h3>
        </Link>
        <p>{project.descriptionExtended}</p>
      </Card>
    </Center>
  );
};

export default GluttonyGamePage;
