import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("programming"); //have to put default search term otherwise it will throw an error because it will be grenderingat empty string.
  const [results, setResults] = useState([]);

  console.log(results);

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
      //console.log(data);
      setResults(data.query.search); //this is an array. data is complete object. // we set result with data returned by axios' get request and it causes our component to rerender.
    };
    search();
  }, [term]);

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            {" "}
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label> Enter Search Term</label>
          <input value={term} onChange={(e) => setTerm()} className="input" />
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;

//anytime u take a string from a 3rd party,you could be introducing a security hole into your application.specifically a type of security hole called XSS attack.
//xss attack = cross site scripting attack.
// where we accidently pick up and render some HTML from an untrusted source that can allow some hacked or otherwise a malicious person to execute some JS inside of our application. which is veryyyy bad.
