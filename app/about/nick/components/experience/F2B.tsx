import React from "react";

const F2B = ({ ...props }: any) => {
  return (
    <div {...props}>
      <div className="2xl:w-6/12">
        <div className="flex flex-col lg:flex-row lg:justify-between">
          <h4 className="mb-0">Field2Base, Inc.</h4>
          <h5>Feb 2020 - Mar 2024</h5>
        </div>
        <ul className="list-disc pl-4">
          <li className="flex flex-col lg:flex-row lg:justify-between">
            <p className="list-item italic">Professional Services Team Lead</p>
            <p className="italic pl-4">May 2023 - Mar 2024</p>
          </li>
          <li className="flex flex-col lg:flex-row lg:justify-between">
            <p className="list-item italic">
              Senior Professional Services Engineer
            </p>
            <p className="italic pl-4">Jan 2022 - May 2023</p>
          </li>
          <li className="flex flex-col lg:flex-row lg:justify-between">
            <p className="list-item italic">
              Technical Implementation Engineer
            </p>
            <p className="italic pl-4">Feb 2020 - Dec 2021</p>
          </li>
        </ul>
      </div>
      <div className="pt-2 pl-4">
        From February 2020 until April 2024 Nick worked for Field2Base, Inc., an
        enterprise app development company located in Morrisville, North
        Carolina. Field2Base&apos;s services include data collection and
        workflow process optimization by converting clients&apos; paper forms
        into electronic forms accessed via the Field2Base Mobile Forms App. The
        &quot;eForms&quot; are created in F2B&apos;s proprietary Forms Designer
        software, which is used to apply UI elements and allows UI logic to be
        added via JavaScript. The data submitted in these eForms can be
        transformed with XML Workflow Definitions and sent to the F2B
        Integration engine to be downloaded by clients via remote F2B
        Integration software suite installations. Data can also be sent to an
        analytics database, delivered in custom HTML email templates, and used
        to pre-populate other eForms. The submitted forms and the data they
        contain are then accessed on the Field2Base Web Portal. Submitted data
        can be viewed in analytics dashboards created in Sisense/Periscope using
        SQL queries and Sisense GUIs.
        <br></br>
        <br></br>
        Starting out as a Technical Implementation Engineer in the Professional
        Services (P.S.) Department, he utilized the JavaScript and SQL skills he
        learned in bootcamp and quickly adapted to the demands of a
        client-facing project implementation position, while mastering the
        proprietary technology offered by Field2Base. By 2022, he was promoted
        to Senior P.S. Engineer after taking on more internal projects,
        including the production of a suite of tutorial videos, documentation of
        best practices and S.O.P.&apos;s, and interdepartmental process
        development, in addition to continued client-focused duties. In May of
        2023, he became P.S. Team Lead, the de facto Department Manager. This
        new position allowed Nick to grow as a leader who managed people,
        projects, and processes, sharing his expertise with the next generation
        of Technical Implementation Engineers.
        <br></br>
        <br></br>
        <p className="font-bold">Responsibilities at Field2Base:</p>
        <ul className="list-disc pl-4 [&_ul]:list-[revert]">
          <li>
            Managed Professional Services Department (people manager)
            <ul className="pl-4">
              <li>Hired and trained Technical Implementation Engineers</li>
              <li>Developed process and schedule for performance reviews</li>
              <li>
                Conducted code reviews to optimize performance and readability
              </li>
            </ul>
          </li>
          <li>
            Project Management and Implementation
            <ul className="pl-4">
              <li>Met with key stakeholders for solutions development</li>
              <li>
                Gathered requirements and performed custom project
                implementations for new, existing, and potential clients
                <ul className="pl-8">
                  <li>Complex form logic and workflows</li>
                  <li>Workflow/process (re)design and development</li>
                  <li>eForm UI</li>
                  <li>Graphic design and layout</li>
                </ul>
              </li>
              <li>Created analytics dashboards using Sisense/Periscope</li>
              <li>
                Maintenance and support for implemented solutions over product
                lifetime
              </li>
            </ul>
          </li>
          <li>
            Client Onboarding
            <ul className="pl-4">
              <li>
                Performed onboarding and product training for new and existing
                clients
              </li>
              <li>
                Documented and optimized client onboarding experience and
                materials
              </li>
            </ul>
          </li>
          <li>
            Created and maintained documentation and resources
            <ul className="pl-4">
              <li>
                Customer-facing and internal technical documentation articles
              </li>
              <li>
                Developed and documented interdepartmental processes and best
                practices in collaboration with C-level and V-level management
              </li>
            </ul>
          </li>
          <li>
            Performed regular product testing and QA, tracked in JIRA software
          </li>
          <li>
            Increased scope of offered solutions and improved internal processes
            by learning new technologies for custom implementations
          </li>
          <li>
            Contributed to product UX/UI decisions aimed at enhancing customer
            experience
          </li>
        </ul>
        <br></br>
        <p className="font-bold">Other projects of note:</p>
        <ul className="list-disc pl-4">
          <li>
            Developed integration software plugins to send eForm data to third
            party API, as well as exporting form data as .xls file. Plugins
            built as .dll file using C#/.NET.
          </li>
          <li>
            Built REST API for client to integrate eForm data with their
            existing infrastructure, instead of having to download PDFs through
            F2B integration software.
          </li>
          <li>
            Spearheaded project to create and maintain tutorial videos for
            application suite. Wrote narration scripts,
            performed/recorded/edited voice over and screen recordings of
            product usage, edited audio and video, etc.
          </li>
        </ul>
        <br></br>
        <p>
          Having made the difficult decision to leave his career at Field2Base
          in March 2024, Nick has spent his time since focusing on personal and
          professional growth. This includes continuing to learn and apply new
          web development technologies (as exemplified by this website), working
          on art and music projects, and occasionally consulting for a few audio
          equipment manufacturing startups.
        </p>
      </div>
    </div>
  );
};

export default F2B;
