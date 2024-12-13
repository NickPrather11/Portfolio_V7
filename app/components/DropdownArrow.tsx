import React from "react";
import Center from "./Center";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";

interface expandedStateProps {
  expanded: boolean;
  toggleExpanded: () => void;
}

const DropdownArrow = ({ expanded, toggleExpanded }: expandedStateProps) => {
  return (
    <Center className="mx-4">
      <button onClick={() => toggleExpanded}>
        {expanded ? <BsChevronUp /> : <BsChevronDown />}
      </button>
    </Center>
  );
};

export default DropdownArrow;
