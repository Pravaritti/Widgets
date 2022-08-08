import React, { useEffect, useState } from "react";
import axios from "axios";

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState("");
  const [debouncedText, setDebouncedText] = useState(text);

  //debouncing because google translate api is a paid api and at every keypress, we make a request and every request costs us.
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(text);
    }, 500);

    //return cleanup function
    return () => {
      clearTimeout(timerId);
    };
  }, [text]);

  useEffect(() => {
    //console.log("New Language or text");

    const doTranslation = async () => {
      //request to google api
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: debouncedText,
            target: language.value,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
            //this key is for google api which is paid but this is guven in the course and only works for localhost3000
          },
        }
      );
      //2nd arguement -> some information to send along in the body
      //3rd arguement ->

      setTranslated(data.data.translations[0].translatedText);
    };

    doTranslation();
  }, [language, debouncedText]);

  return (
    <div>
      <h1 className="ui header"> {translated}</h1>
    </div>
  );
};

export default Convert;
