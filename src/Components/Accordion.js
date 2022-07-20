import React from "react";

const Accordion = ({ items }) => {
  const onTitleClick = (index) => {
    console.log("Title clicked", index);
  };

  const renderedItems = items.map((item, index) => {
    return (
      <React.Fragment key={item.title}>
        {/* to avoid extra border but still add a key, we use react.fragment instead of div */}
        <div className="title active" onClick={() => onTitleClick(index)}>
          {/*why arrow function? because we do not want to run that callback function the instant our componenet is rederded. instead we want to call it at som epoint in the future.*/}
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className="content active">
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Accordion;
