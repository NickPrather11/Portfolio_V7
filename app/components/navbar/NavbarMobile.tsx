"use client";
import React, { createContext, useEffect, useRef, useState } from "react";
import {
  BsCassette,
  BsFillHouseFill,
  BsInfoCircle,
  BsList,
  BsPalette,
  BsPersonRaisedHand,
  BsTools,
  BsWindow,
} from "react-icons/bs";
import NavbarMobileLink from "./NavbarMobileLink";

type ExpandedContextType = boolean;

const MobileMenuContext = createContext<ExpandedContextType>(false);

const NavbarMobile = ({ className }: any) => {
  const [expanded, setExpanded] = useState<ExpandedContextType>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const handleParentExpandedStateUpdate = (newStateValue: boolean) => {
    setExpanded(newStateValue);
  };
  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setExpanded(false);
    }
  };

  useEffect(() => {
    if (expanded) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [expanded]);

  return (
    <div className={`flex flex-grow justify-end ${className}`}>
      <div className="flex items-center mr-4 text-4xl">
        <button
          onClick={() => setExpanded((curr) => !curr)}
          className={`p-2 rounded-full ${expanded ? "bg-slate-500" : ""}`}
        >
          <BsList />
        </button>
      </div>
      <MobileMenuContext.Provider value={expanded}>
        <div
          ref={dropdownRef}
          className={`${
            expanded
              ? "flex flex-col absolute z-50 right-0 mr-2 mt-16 rounded-xl border border-slate-200 bg-slate-900"
              : "hidden"
          }`}
        >
          <NavbarMobileLink
            name="Home"
            icon={<BsFillHouseFill />}
            childDropdownBool={false}
            childDropdownContents={[]}
            onParentExpandedStateUpdate={handleParentExpandedStateUpdate}
          />
          <hr className="w-full" />
          <NavbarMobileLink
            name="Projects"
            icon={<BsTools />}
            childDropdownBool={false}
            childDropdownContents={[]}
            onParentExpandedStateUpdate={handleParentExpandedStateUpdate}
          />
          <hr className="w-full" />
          <NavbarMobileLink
            name="About"
            icon={<BsInfoCircle />}
            childDropdownBool={true}
            childDropdownContents={[
              {
                name: "About This Site",
                path: "../about/site",
                icon: <BsWindow />,
              },
              {
                name: "About Nick",
                path: "../about/nick",
                icon: <BsPersonRaisedHand />,
              },
              {
                name: "Music",
                path: "../about/music",
                icon: <BsCassette />,
              },
              {
                name: "Paintings",
                path: "../about/paintings",
                icon: <BsPalette />,
              },
            ]}
            onParentExpandedStateUpdate={handleParentExpandedStateUpdate}
          />
        </div>
      </MobileMenuContext.Provider>
    </div>
  );
};

export default NavbarMobile;
