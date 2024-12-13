import React, { Suspense } from "react";
import Loading from "../components/LoadingComponent";
import Page from "../components/Page";
import Link from "next/link";
import Card from "../components/Card";

export default function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Page>
      <div className="flex justify-center w-full bg-slate-700 bg-opacity-90">
        <h1 className="py-6">
          <Link href="/projects" className="hover:text-slate-300">
            PROJECTS
          </Link>
        </h1>
      </div>

      <hr className="mt-6 w-11/12 md:w-7/12" />

      <Page className="lg:w-11/12">
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </Page>
    </Page>
  );
}
