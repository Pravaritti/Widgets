import React, { useState } from "react";
import Accordion from "./Components/Accordion";
import Search from "./Components/Search";
import Dropdown from "./Components/Dropdown";
import Translate from "./Components/Translate";

const items = [
  {
    title: "What is React?",
    content: "React is a front end javascript framework",
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library among engineers",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components",
  },
];

// this will be static array and it wont change so it doesnt matter if i describe it inside the component or outside.
const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: " green",
  },
  {
    label: "A Shade of Blue",
    value: "blue",
  },
];

const showAccordion = () => {
  if (window.location.pathname === "/") {
    return <Accordion items={items} />;
  }
};

const showList = () => {
  if (window.location.pathname === "/list") {
    return <Search />;
  }
};

const showDropdown = () => {
  if (window.location.pathname === "/dropdown") {
    return <Dropdown />;
  }
};

const showTranslate = () => {
  if (window.location.pathname === "/translate") {
    return <Translate />;
  }
};

export default () => {
  {
    /*sconst [selected, setSelected] = useState(options[0]);
const [showDropdown, setShowDropdown] = useState(true);*/
  }

  return (
    <div>
      {showAccordion()} {showList()} {showDropdown()} {showTranslate()}
    </div>
  );
};
