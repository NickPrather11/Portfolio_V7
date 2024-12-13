import React from "react";
import F2B from "./experience/F2B";
import SoundPure from "./experience/SoundPure";
import FreelanceAudio from "./experience/FreelanceAudio";
import MoogMusic from "./experience/MoogMusic";

const ProfessionalExperience = ({ ...props }: any) => {
  return (
    <div className="flex flex-col gap-6" {...props}>
      <h3>Professional Experience</h3>
      <F2B id="f2b" />
      <br></br>
      <SoundPure id="soundpure" />
      <br></br>
      <MoogMusic id="moog" />
      <br></br>
      <FreelanceAudio id="freelance_audio" />
    </div>
  );
};

export default ProfessionalExperience;
