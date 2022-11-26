import "./App.css";
import Page from "./Page/Page";
import { useState, useEffect } from "react";

function App() {
  const [page, setPage] = useState(1);
  const [items, setItems] = useState([]);

  function nextPage() {
    setPage(page + 1);
    window.scrollTo(0, 0);
  }

  function prevPage() {
    if (page === 1) {
      setPage(1);
    } else {
      setPage(page - 1);
    }
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    fetch(
      `https://api.rawg.io/api/games?key=60c704c8381e4e7fb5ede81993487612&page=${page}`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setItems(result);
        },
        (error) => {
          console.log(error);
        }
      );
  });

  return (
    <div className="App">
      <Page items={items}></Page>
      <button onClick={prevPage}>Prev</button>
      <button onClick={nextPage}>Next</button>
    </div>
  );
}

export default App;
