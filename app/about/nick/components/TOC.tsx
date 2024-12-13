"use client";
import Link from "next/link";
import React, { createContext, useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

type ExpandedContextType = boolean;

const DropdownContext = createContext<ExpandedContextType>(false);

interface ITOCSubLink {
  sectionPath: string;
  text: string;
}

interface ITOCLink {
  sectionPath: string;
  text: string;
  subLinks: ITOCSubLink[] | null;
}

const TOC = () => {
  const [expandedTOC, setExpandedTOC] = useState<ExpandedContextType>(false);

  const linkList: ITOCLink[] = [
    {
      sectionPath: "#professional_experience",
      text: "Professional Experience",
      subLinks: [
        {
          sectionPath: "#f2b",
          text: "Field2Base",
        },
        {
          sectionPath: "#soundpure",
          text: "SoundPure",
        },
        {
          sectionPath: "#moog",
          text: "Moog Music",
        },
        {
          sectionPath: "#freelance_audio",
          text: "Freelance Music and Audio",
        },
      ],
    },
    {
      sectionPath: "#languages_and_tech",
      text: "Languages & Tech",
      subLinks: null,
    },
    {
      sectionPath: "#education",
      text: "Education",
      subLinks: null,
    },
    {
      sectionPath: "#additional_background",
      text: "Additional Background",
      subLinks: null,
    },
  ];

  return (
    <div>
      <div className="flex flex-row items-center gap-4">
        <h3>Table of Contents</h3>
        <button
          onClick={() => setExpandedTOC((curr) => !curr)}
          className="text-2xl font-bold mb-4"
        >
          {expandedTOC ? <BsChevronUp /> : <BsChevronDown />}
        </button>
      </div>
      <DropdownContext.Provider value={expandedTOC}>
        <ul
          className={`${
            expandedTOC
              ? "flex flex-col pl-4 gap-2 list-disc [&_ul]:list-[revert] pb-4"
              : "hidden"
          }`}
        >
          {linkList.map((section: ITOCLink, index: number) => (
            <li key={index}>
              <Link href={section.sectionPath} className="link">
                {section.text}
              </Link>
              <ul className="flex flex-col pl-8 gap-2">
                {section.subLinks !== null
                  ? section.subLinks.map(
                      (subsection: ITOCSubLink, i: number) => (
                        <li key={i}>
                          <Link href={subsection.sectionPath} className="link">
                            {subsection.text}
                          </Link>
                        </li>
                      )
                    )
                  : null}
              </ul>
            </li>
          ))}
        </ul>
      </DropdownContext.Provider>
    </div>
  );
};

export default TOC;
