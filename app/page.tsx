import Card from "./components/Card";
import CardLink from "./components/CardLink";
import Center from "./components/Center";
import Page from "./components/Page";

export default function Home() {
  return (
    <Page className="pt-4">
      <Card>
        <Center className="flex-col lg:max-w-6xl">
          <p className="text-md">
            Hi, I&apos;m Nick - full stack web application developer with a background in software implementation. Experienced in data transformation, mobile and web-based SaaS implementation, cross-functional solutions development, technical writing, audio/video production and editing, and more...
          </p>
        </Center>
      </Card>

      <hr className="mt-6 w-10/12 md:w-7/12 border-slate-500" />

      <Center id="all_landing_cards" className="flex flex-col w-full m-6">
        <Center className="flex-col justify-evenly lg:flex-row">
          <CardLink
            href="https://github.com/NickPrather11/Portfolio_V7"
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
