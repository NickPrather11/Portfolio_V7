import React from "react";
import Link from "next/link";
import Center from "./Center";
import {
  FaGithub,
  FaLinkedin,
  FaBandcamp,
  FaRegCopyright,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer absolute bottom-0 w-full bg-slate-900">
      <Center className="flex-col pt-4">
        <div className="flex flex-row gap-8 m-2">
          <Link
            href="https://github.com/NickPrather11/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-3xl" />
          </Link>

          <Link
            href="https://www.linkedin.com/in/nick-prather-945109101/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-3xl" />
          </Link>

          <Link
            href="https://nickprather.bandcamp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaBandcamp className="text-3xl" />
          </Link>
        </div>

        <div className="flex flex-row gap-2 pt-4">
          <FaRegCopyright />
          <p className="text-xs">2024 / All Rights Reserved / Nick Prather</p>
        </div>
      </Center>
    </footer>
  );
};

export default Footer;
