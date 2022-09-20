import React, { createContext, useState } from "react";

export const newsContext = createContext({
  newsTab: [],
  getAllNews: () => {},
});

function NewsContextProvider(props) {
  const [newsTab, setEvTab] = useState([]);
  function getAllNews() {
    fetch("/news", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => setEvTab(data));
  }
  const context = {
    newsTab: newsTab,
    getAllNews: getAllNews,
  };

  return (
    <newsContext.Provider value={context}>
      {props.children}
    </newsContext.Provider>
  );
}

export default NewsContextProvider;
