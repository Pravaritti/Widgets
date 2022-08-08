import React, { useEffect } from "react";
import axios from "axios";

const Convert = ({ language, text }) => {
  useEffect(() => {
    //console.log("New Language or text");

    //request to google api
    axios.post(
      "https://translation.googleapis.com/language/translate/v2",
      {},
      {
        params: {
          q: text,
          target: language.value,
          key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          //this key is for google api which is paid but this is guven in the course and only works for localhost3000
        },
      }
    );
    //2nd arguement -> some information to send along in the body
    //3rd arguement ->
  }, [language, text]);

  return <div />;
};

export default Convert;
