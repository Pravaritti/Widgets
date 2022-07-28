import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("programming"); //have to put default search term otherwise it will throw an error because it will be grenderingat empty string.
  const [results, setResults] = useState([]);

  //console.log(results);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });

      setResults(data); // we set result with data returned by axios' get request and it causes our component to rerender.
    };
    search();
  }, [term]);

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
