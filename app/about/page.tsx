import React from "react";
import Center from "../components/Center";
import CardLink, { ICardLink } from "../components/CardLink";

const AboutPage = () => {
  const linkProps: ICardLink[] = [
    {
      href: "/about/site",
      target: "_self",
      title: "About This Site",
      description: "Learn more about how this site was created",
      className: "",
      childImgPath: null,
    },
    {
      href: "/about/nick",
      target: "_self",
      title: "About Nick",
      description: "Learn more about Nick Prather",
      className: "",
      childImgPath: null,
    },
    {
      href: "/about/music",
      target: "_self",
      title: "Music",
      description: "Check out my recording projects",
      className: "",
      childImgPath: null,
    },
    {
      href: "/about/paintings",
      target: "_self",
      title: "Paintings",
      description: "Browse examples of my acrylic paintings",
      className: "",
      childImgPath: null,
    },
  ];
  return (
    <Center className="flex-col md:flex-row md:flex-wrap">
      {linkProps.map((link: ICardLink, index: number) => (
        <CardLink
          key={index}
          href={link.href}
          target={link.target}
          title={link.title}
          description={link.description}
          className={link.className}
          childImgPath={link.childImgPath}
        />
      ))}
    </Center>
  );
};

export default AboutPage;
