"use client";
import React, { ReactNode, useState } from "react";
import Center from "./Center";
import Card from "./Card";
import Link from "next/link";
import { useRouter } from "next/navigation";

export interface ILandingCard {
  href: string;
  target: string;
  className: string;
  title: string;
  btnTxt: string;
  children: ReactNode;
}

const LandingCard = ({
  href,
  target,
  className,
  title,
  btnTxt,
  children
}: ILandingCard) => {
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
    <div className={`px-6 ${className}`}>
      <h3>{title}</h3>
    
        <Card>
          {children}
        </Card>

      <div className="flex justify-self-end w-4/12 px-4 py-2 shadow-lg rounded-lg border border-slate-800 hover:text-slate-400">
          {target === "_blank" ? (
            <button onClick={(e) => handleOnClickExternal(e)}>
              <Center className="text-sm">{btnTxt}</Center>
            </button>
          ) : (
            <Link href={href} legacyBehavior={true}>
              <a onClick={(e) => handleOnClickInternal(e)}>
                <Center className="text-sm">{btnTxt}</Center>
              </a>
            </Link>
          )}
      </div>
    </div>
  );
};

export default LandingCard;
