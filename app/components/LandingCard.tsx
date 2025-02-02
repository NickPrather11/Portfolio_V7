"use client";
import React, { ReactNode, useState } from "react";
import Center from "./Center";
import Card from "./Card";
import Link from "next/link";
import { useRouter } from "next/navigation";
import CardLink from "./CardLink";

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
  children,
}: ILandingCard) => {
  return (
    <div className={`px-6 ${className}`}>
      <h3>{title}</h3>

      <Card>{children}</Card>

      <div className="flex justify-self-end w-4/12 px-4 py-2">
        <CardLink
          key={href}
          href={href}
          target={target}
          title={null}
          description={btnTxt}
          className="shadow-lg rounded-lg border border-slate-800 text-nowrap"
          childImgPath={null}
          isAnimated={true}
        />
      </div>
    </div>
  );
};

export default LandingCard;
