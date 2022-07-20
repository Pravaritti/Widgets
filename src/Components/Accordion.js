import React, { useState } from "react";

const Accordion = ({ items }) => {
  //to initialize new piece of state
  const [activeIndex, setActiveIndex] = useState(null); //array destructuring -> [piece of state we are trying to keep track of (so basically some value that will change over time), function we call to update our piece of state]
  //null = default value for our state

  const onTitleClick = (index) => {
    //to update our value of our piece of state any time a user clicks on a title
    setActiveIndex(index);
  };

  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? "active" : "";

    return (
      <React.Fragment key={item.title}>
        {/* to avoid extra border but still add a key, we use react.fragment instead of div */}
        <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
          {/*why arrow function? because we do not want to run that callback function the instant our componenet is rederded. instead we want to call it at som epoint in the future.*/}
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Accordion;
