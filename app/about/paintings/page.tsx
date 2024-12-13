import React, { Suspense } from "react";
import fs from "fs";
import PaintingCard from "@/app/about/paintings/components/PaintingCard";
import Loading from "../../projects/loading";
import Card from "@/app/components/Card";

const ProjectsPage = async () => {
  {
    /* 
      The "paintings" variable initialization below does not follow the standard of importing the TypeScript interface from the component that props are being sent to. In order to follow project standards, investigate how to read the filenames from ./public/paintings/ and store them in an array of IPainting objects.
    */
  }
  const paintings: string[] = fs.readdirSync("./public/paintings/");

  return (
    <Card>
      <div className="flex flex-col items-center gap-4">
        <h2>Paintings</h2>
        <p className="italic text-sm">Original paintings (acrylic on canvas)</p>
      </div>

      <ul className="flex flex-wrap justify-center mt-10">
        {paintings.map((painting: string, index: number) => (
          <li key={index}>
            <Suspense fallback={<Loading />}>
              <PaintingCard fileName={painting} />
            </Suspense>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default ProjectsPage;
