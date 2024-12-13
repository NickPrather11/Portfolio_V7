import React from "react";
import { IProject } from "@/app/db/seeds/dbProjectsSeed";
import Link from "next/link";
import Card from "@/app/components/Card";
import Center from "@/app/components/Center";

const LebowskiTriviaPage = () => {
  const project: IProject = {
    slug: "lebowski_trivia",
    imgPath: "/projectImages/Lebowski_Trivia.PNG",
    hrefDeployed: "https://nickprather11.github.io/Lebowski_Trivia/",
    hrefRepo: "https://github.com/NickPrather11/Lebowski_Trivia",
    title: "Lebowski Trivia",
    descriptionShort: "Trivia game based on the movie 'The Big Lebowski'",
    descriptionExtended:
      "This is a trivia game involving the film 'The Big Lebowski'. You have 120 seconds to answer all 15 questions. When you are finished answering, just hit the 'submit' button. If you run out of time, any unanswered questions will be counted as incorrect. When you are finished, you'll be directed to a page displaying your score as 'n/15'. Any questions answered incorrectly will be shown with your answer (marked as incorrect) and the correct answer. Click the 'Try Again' button to take the quiz again!",
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

export default LebowskiTriviaPage;
