import React from "react";

const SoundPure = ({ ...props }: any) => {
  return (
    <div {...props}>
      <div className="flex flex-col md:flex-row md:justify-between 2xl:w-6/12">
        <h4 className="mb-0">SoundPure, LLC</h4>
        <h5 className="align-center">Sep 2014 - Sep 2015</h5>
      </div>
      <p className="italic">Pro Audio Sales Expert</p>
      <ul className="list-disc pl-4 [&_ul]:list-[revert]">
        <li>
          Online, phone, and in-person sales of boutique recording equipment
        </li>
        <li>Consulted for professional and amateur recording studios</li>
        <li>
          Maintained customer information and outreach cycles in custom CRM
        </li>
        <li>
          Provided equipment discussion and comparison content for marketing
          videos
        </li>
      </ul>
    </div>
  );
};

export default SoundPure;
