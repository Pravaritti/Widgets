import React, { useState, useEffect } from "react";

const Search = () => {
  const [term, setTerm] = useState("");

  console.log("I run with every render.");

  useEffect(() => {
    console.log("I run after every render and at first render");
  }, [term]); //2nd argument = when our code is executed (3 scenerios in point 5 of hook system)
  //options to pass
  //1. empty array = []
  //2. array with one or more elements inside it = [term]
  //3. pass nothing at all

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label> Enter Search Term</label>
          <input value={term} onChange={(e) => setTerm()} className="input" />
        </div>
      </div>
    </div>
  );
};

export default Search;
