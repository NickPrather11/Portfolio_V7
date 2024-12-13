import React from "react";

const FreelanceAudio = ({ ...props }: any) => {
  return (
    <div {...props}>
      <div className="flex flex-col xl:flex-row lg:justify-between 2xl:w-6/12">
        <h4 className="mb-0">Freelance Music and Audio Work</h4>
        <h5>2005 - 2020</h5>
      </div>

      <p className="font-bold">Teaching</p>
      <ul className="list-disc pl-4 [&_ul]:list-[revert]">
        <li>
          The Raleigh Musician&apos;s Learning Center (2018-2019)
          <ul className="pl-4">
            <li>Percussion and Guitar Instructor, ages 5-50</li>
          </ul>
        </li>
        <li>
          Freelance Music Instructor (2005-2020)
          <ul className="pl-4">
            <li>
              Personlized lessons for guitar, bass, synthesizer, piano, and
              music theory
            </li>
          </ul>
        </li>
      </ul>

      <br></br>

      <p className="font-bold">Music Composition and Performance</p>
      <ul className="list-disc pl-4 [&_ul]:list-[revert]">
        <li>
          Hello Hugo (2010-2015)
          <ul className="pl-4">
            <li>
              4 member instrumental band (experimental
              post-rock/progressive-rock/jazz/electronic)
            </li>
            <li>Assistant Engineer for 2 EPs and 2 LPs</li>
            <li>
              Backing band for Bromelia Ariel Dance Collective performances
              (2013-2014)
            </li>
            <li>
              Composed and recorded soundtrack for Just Tom, a feature film by
              director Peyton Lea (2013)
            </li>
          </ul>
        </li>
        <li>
          The River Otters (2016-2018)
          <ul className="pl-4">
            <li>3 member folk-rock and blues band</li>
            <li>Bass guitarist for live performances</li>
            <li>
              Assistant Engineer and Assistant Producer for self-titled album
              (2017), performed bass guitar, synthesizer, and aux. percussion
            </li>
          </ul>
        </li>
        <li>
          TTRROLL (2013)
          <ul className="pl-4">
            <li>
              6 member experimental ensemble improvisation and perfomance art at
              Black Mountain College &#123;Re&#125;HAPPENING
            </li>
          </ul>
        </li>
        <li>
          Pepper Pulp (2012-2013)
          <ul className="pl-4">
            <li>6 member Ween cover band</li>
          </ul>
        </li>
        <li>
          Clouds of Greer (2011-2013)
          <ul className="pl-4">
            <li>4-5 member Americana/Folk-Rock band led by Jason Daniello</li>
          </ul>
        </li>
        <li>Various other bands, performances, recordings</li>
      </ul>
    </div>
  );
};

export default FreelanceAudio;
