import Card from "./components/Card";
import CardLink from "./components/CardLink";
import Center from "./components/Center";
import LandingCard from "./components/LandingCard";
import Page from "./components/Page";

export default function Home() {
  return (
    <Page className="pt-4 pb-8">
      <Card>
        <Center className="flex-col lg:max-w-6xl">
          <p className="text-md">
            Hi, I&apos;m Nick - full stack web application developer with a
            background in software implementation. Experienced in data
            transformation, mobile and web-based SaaS implementation,
            cross-functional solutions development, technical writing,
            audio/video production and editing, and more.<p></p>
          </p>
        </Center>
      </Card>

      <hr className="my-4 w-11/12 border-slate-500" />

      <div className="flex flex-col w-full">
        <LandingCard
          href="./projects"
          target="_self"
          title="Projects"
          className=""
          btnTxt="more projects"
        >
          Check out past portfolio versions, current projects, old projects,
          etc.
        </LandingCard>

        <hr className="my-4 w-11/12 border-slate-500 self-center" />

        <LandingCard
          href="https://github.com/NickPrather11/Portfolio_V7"
          target="_blank"
          title="Site Repo"
          className=""
          btnTxt="view on GitHub"
        >
          View the codebase for this site.
        </LandingCard>

        <hr className="my-4 w-11/12 border-slate-500 self-center" />

        <LandingCard
          href="https://github.com/users/NickPrather11/projects/1"
          target="_blank"
          title="Planned Updates"
          className=""
          btnTxt="view on GitHub"
        >
          Follow my progress and planned updates for this site.
        </LandingCard>

        <hr className="my-4 w-11/12 border-slate-500 self-center" />

        <LandingCard
          href="./about"
          target="_self"
          title="About"
          className=""
          btnTxt="learn more"
        >
          Learn more about me, my music, and my art.
        </LandingCard>
      </div>
    </Page>
  );
}
