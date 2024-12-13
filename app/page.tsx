import Card from "./components/Card";
import CardLink from "./components/CardLink";
import Center from "./components/Center";
import Page from "./components/Page";

export default function Home() {
  return (
    <Page className="pt-4">
      <Card>
        <Center className="flex-col lg:max-w-6xl">
          <h2>Hi, I&apos;m Nick!</h2>

          <p className="text-lg text-center">
            Full Stack Web Application Developer with a background in
            customer-facing project implementation - specializing in UI
            functionality and data transformation. Additional experience in
            people management, project management, technical writing,
            audio/video production and editing, and more.
          </p>
        </Center>
      </Card>

      {/* Testing for background slideshow implementation 
      <div className="flex justify-center m-10 bg-gray-800">
        <img className="absolute w-80" src="/backgrounds/2x2_1a.jpg" alt="" />
        <img className="absolute w-80 opacity-100" src="/backgrounds/2x2_2a.jpg" alt="" />
      </div>
      */}

      <Center id="all_landing_cards" className="flex flex-col w-full m-6">
        <Center className="flex-col justify-evenly lg:flex-row">
          <CardLink
            href="https://github.com/NickPrather11/Next_TS_Portfolio"
            target="_blank"
            title="Site Repo"
            description="See the code repository for this site"
            className=""
            childImgPath={null}
          />

          <CardLink
            href="./projects"
            target="_self"
            title="Projects"
            description="Check out my past development projects"
            className=""
            childImgPath={null}
          />

          {/*
          <CardLink
            href="./contact"
            target="_self"
            title="Contact"
            description="Curious about my work? Interested in collaborating? Send me a message!"
            className=""
            childImgPath={null}
          />
          */}
        </Center>
        <Center className="flex-col justify-evenly lg:flex-row">
          <CardLink
            href="https://github.com/users/NickPrather11/projects/1"
            target="_blank"
            title="Planned Updates"
            description="GitHub project for tracking updates and bug fixes"
            className=""
            childImgPath={null}
          />
          
          <CardLink
            href="./about"
            target="_self"
            title="About"
            description="Learn more about this site, my work experience, music, and art"
            className=""
            childImgPath={null}
          />
        </Center>
      </Center>
    </Page>
  );
}
