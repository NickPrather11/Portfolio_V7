import React from "react";
import Card from "@/app/components/Card";
import Center from "@/app/components/Center";
import Link from "next/link";
import TechCard from "@/app/about/site/components/TechCard";
import dbLogoSeed, { ILogo } from "@/app/db/seeds/dbLogoSeed";

const AboutSite = () => {
  const item: ILogo[] = dbLogoSeed;

  return (
    <Center className="flex-col">
      <Card className="md:w-9/12">
        <h2 className="text-center">About This Site</h2>

        <p>
          This site is a React.JS application built with Next.JS, Typescript,
          and TailwindCSS, containing data retrieved from a MongoDB database
          using Mongoose.
          <br></br>
          <br></br>
          If you would like to check out the code repo for this site and see the
          updates I have planned, see the links below.
        </p>

        <div className="flex flex-col justify-evenly mt-8 gap-8 md:flex-row">
          <Link
            href="https://github.com/NickPrather11/Next_TS_Portfolio"
            className="link text-center text-xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            Site Repo
          </Link>
          <Link
            href="https://github.com/users/NickPrather11/projects/1"
            className="link text-center text-xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            Planned Updates
          </Link>
        </div>
      </Card>

      <Card>
        <Center className="flex-col gap-8">
          <p className="italic text-sm">
            This site was built using the following technologies
          </p>
          <ul className="flex flex-wrap justify-around items-center gap-2">
            {item.map((logo: ILogo) => (
              <TechCard
                key={logo.name}
                name={logo.name}
                url={logo.url}
                imgFile={logo.imgFile}
              />
            ))}
          </ul>
        </Center>
      </Card>
    </Center>
  );
};

export default AboutSite;
