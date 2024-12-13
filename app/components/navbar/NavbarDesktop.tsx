"use client";
import React, { createContext, useEffect, useState } from "react";
import NavbarDesktopLink from "./NavbarDesktopLink";
import {
  BsCassette,
  BsFillHouseFill,
  BsInfoCircle,
  BsPalette,
  BsPersonRaisedHand,
  BsTools,
  BsWindow,
} from "react-icons/bs";

const ActiveLinkContext = createContext<string>("");

const NavbarDesktop = ({ className }: any) => {
  const [activeLink, setActiveLink] = useState("");

  const activeLinkHandler = (newValue: string) => {
    setActiveLink(newValue);
  };

  return (
    <div className={`hidden items-center gap-4 ${className}`}>
      <ActiveLinkContext.Provider value={activeLink}>
        <div className="flex flex-row items-center justify-center">
          {activeLink === "Home" ? (
            <p className="text-2xl text-slate-500">|</p>
          ) : null}
          <NavbarDesktopLink
            path="../"
            name="Home"
            icon={<BsFillHouseFill />}
            dropdownBool={false}
            dropdownContents={[]}
            handleActiveLink={activeLinkHandler}
          />
          {activeLink === "Home" ? (
            <p className="text-2xl text-slate-500">|</p>
          ) : null}
        </div>

        <div className="flex flex-row items-center justify-center">
          {activeLink === "Projects" ? (
            <p className="text-2xl text-slate-500">|</p>
          ) : null}
          <NavbarDesktopLink
            path="../projects"
            name="Projects"
            icon={<BsTools />}
            dropdownBool={false}
            dropdownContents={[]}
            handleActiveLink={activeLinkHandler}
          />
          {activeLink === "Projects" ? (
            <p className="text-2xl text-slate-500">|</p>
          ) : null}
        </div>

        <div className="flex flex-row items-center justify-center">
          {activeLink === "About" ? (
            <p className="text-2xl text-slate-500">|</p>
          ) : null}
          <NavbarDesktopLink
            path="../about"
            name="About"
            icon={<BsInfoCircle />}
            dropdownBool={true}
            dropdownContents={[
              {
                path: "../about/site",
                text: "About This Site",
                icon: <BsWindow />,
              },
              {
                path: "../about/nick",
                text: "About Nick",
                icon: <BsPersonRaisedHand />,
              },
              {
                path: "../about/music",
                text: "Music",
                icon: <BsCassette />,
              },
              {
                path: "../about/paintings",
                text: "Paintings",
                icon: <BsPalette />,
              },
            ]}
            handleActiveLink={activeLinkHandler}
          />
          {activeLink === "About" ? (
            <p className="text-2xl text-slate-500">|</p>
          ) : null}
        </div>

        {/*
        <NavbarDesktopLink 
          path="../contact" 
          text="Contact" 
          icon={<BsEnvelope />} 
          dropdown={false} 
          dropdownProps={[]} 
          handleActiveLink={activeLinkHandler} 
        />
        */}

        {/* 
        <NavbarDesktopLink
          path="../login"
          text="Login"
          icon={<BsPersonCircle />}
          dropdown={false}
          dropdownProps={[]}
          handleActiveLink={activeLinkHandler}
        />
        */}
      </ActiveLinkContext.Provider>
    </div>
  );
};

export default NavbarDesktop;
