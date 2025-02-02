"use client";
import React, { useState } from "react";
import Center from "./Center";
import Card from "./Card";
import Link from "next/link";
import { useRouter } from "next/navigation";

export interface ICardLink {
  href: string;
  target: string;
  className: string | null;
  title: string | null;
  description: string | null;
  childImgPath: string | null;
  isAnimated: boolean;
}

const CardLink = ({
  href,
  target,
  className,
  title,
  description,
  childImgPath,
  isAnimated,
}: ICardLink) => {
  const [clicked, setClicked] = useState(false);
  const router = useRouter();

  const handleOnClickExternal = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setClicked(true);
    setTimeout(() => {
      const newWindow = window.open(href, target, "noopener,noreferrer");
      if (newWindow) newWindow.opener = null;
      setClicked(false);
    }, 500);
  };

  const handleOnClickInternal = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setClicked(true);
    setTimeout(() => {
      router.push(href);
      setClicked(false);
    }, 500);
  };

  return (
    <Card
      className={`flex justify-center w-3/4 shadow-lg rounded-lg border-2 border-slate-800 lg:w-1/2 hover:text-slate-400
        ${
          isAnimated && clicked
            ? "transition duration-500 [transform-style:preserve-3d] [transform:rotateY(360deg)]"
            : ""
        }
        ${className}`}
    >
      {target === "_blank" ? (
        <button onClick={(e) => handleOnClickExternal(e)}>
          <Center className="flex flex-col">
            {childImgPath !== null ? (
              <div className="flex flex-0">
                <img src={childImgPath} alt="" className="m-2 mb-4" />
              </div>
            ) : null}
            <h3 className="text-center text-nowrap">{title}</h3>
            <p className="text-center text-sm text-wrap">{description}</p>
          </Center>
        </button>
      ) : (
        <Link href={href} legacyBehavior={true}>
          <a onClick={(e) => handleOnClickInternal(e)}>
            <Center className="flex flex-col">
              {childImgPath !== null ? (
                <div className="flex flex-0">
                  <img src={childImgPath} alt="" className="m-2 mb-4" />
                </div>
              ) : null}
              <h3 className="text-center text-nowrap">{title}</h3>
              <p className="text-center text-sm text-wrap">{description}</p>
            </Center>
          </a>
        </Link>
      )}
    </Card>
  );
};

export default CardLink;
