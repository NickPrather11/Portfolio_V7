"use client";
import Link from "next/link";
import React, { createContext, ReactNode, useState } from "react";
import Center from "../Center";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import NavbarMobileChildDropdown from "./NavbarMobileChildDropdown";
import DropdownArrow from "../DropdownArrow";

export interface ChildDropdownLink {
  name: string;
  path: string;
  icon: ReactNode;
}

interface NavbarMobileLinkProps {
  name: string;
  icon: ReactNode;
  childDropdownBool: boolean;
  childDropdownContents: ChildDropdownLink[];
  onParentExpandedStateUpdate: (newStateValue: boolean) => void;
}

type ChildExpandedContextType = boolean;

const ChildContext = createContext<ChildExpandedContextType>(false);

const NavbarMobileLink = ({
  name,
  icon,
  childDropdownBool,
  childDropdownContents,
  onParentExpandedStateUpdate,
}: NavbarMobileLinkProps) => {
  const [childExpanded, setChildExpanded] =
    useState<ChildExpandedContextType>(false);

  const handleAllExpandedStateUpdates = (newStateValue: boolean) => {
    setChildExpanded(newStateValue);
    onParentExpandedStateUpdate(newStateValue);
  };

  let path: string = "../";
  if (name !== "Home") {
    path += name.toLowerCase();
  }

  return (
    <div>
      <div className="group flex flex-row">
        <Link
          href={path}
          className="flex flex-row p-4 gap-2 text-2xl text-white group-hover:text-slate-400"
          onClick={() => onParentExpandedStateUpdate(false)}
        >
          <Center className="gap-4">
            {icon}
            {name}
          </Center>
        </Link>
        {childDropdownBool ? (
          /*<DropdownArrow expanded={childExpanded} toggleExpanded={{toggleChildExpanded}}/>*/
          <Center className="flex ml-12 mr-2">
            <button onClick={() => setChildExpanded((curr) => !curr)}>
              {childExpanded ? <BsChevronUp /> : <BsChevronDown />}
            </button>
          </Center>
        ) : null}
      </div>
      <ChildContext.Provider value={childExpanded}>
        <div className={`${childExpanded ? "flex flex-col" : "hidden"}`}>
          <NavbarMobileChildDropdown
            dropdownContents={childDropdownContents}
            onStateUpdates={handleAllExpandedStateUpdates}
          />
        </div>
      </ChildContext.Provider>
    </div>
  );
};

export default NavbarMobileLink;
