"use client";
import React, { createContext, useState, useEffect, Suspense } from "react";
import Loading from "../components/LoadingComponent";
import Page from "../components/Page";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface ITabProps {
  href: string;
  tabText: string;
  stateNum: number;
}

const ActiveTabContext = createContext<number>(0);

export default function AboutPageLayout({ children }: any) {
  const [activeTabState, setActiveTabState] = useState(0);
  const pathname = usePathname();
  const tabProps: ITabProps[] = [
    {
      href: "/about/site",
      tabText: "About This Site",
      stateNum: 1,
    },
    {
      href: "/about/nick",
      tabText: "About Nick",
      stateNum: 2,
    },
    {
      href: "/about/music",
      tabText: "Music",
      stateNum: 3,
    },
    {
      href: "/about/paintings",
      tabText: "Paintings",
      stateNum: 4,
    },
  ];

  useEffect(() => {
    tabProps.forEach((tab) => {
      if (tab.href === pathname) {
        setActiveTabState(tab.stateNum);
        return;
      } else if (pathname === "/about") {
        setActiveTabState(0);
        return;
      }
    });
  }, [pathname]);

  return (
    <Page>
      <div className="flex justify-center w-full bg-slate-700 bg-opacity-90">
        <h1 className="py-6">
          <Link href="/about" className="hover:text-slate-300">
            ABOUT
          </Link>
        </h1>
      </div>

      <hr className="mt-6 w-11/12 md:w-7/12" />

      <ActiveTabContext.Provider value={activeTabState}>
        <div className="flex flex-row flex-wrap justify-evenly w-full pt-2 md:justify-center md:gap-10 md:w-7/12">
          {tabProps.map((tab: ITabProps, index: number) => (
            <Link
              key={index}
              href={tab.href}
              className={`tab-link ${
                activeTabState === tab.stateNum
                  ? "bg-slate-800 bg-opacity-70"
                  : ""
              }`}
            >
              {tab.tabText}
            </Link>
          ))}
        </div>
      </ActiveTabContext.Provider>

      <Page className="lg:w-11/12">
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </Page>
    </Page>
  );
}
