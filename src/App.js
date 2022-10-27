import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import { Like } from "./pages/Like/Like";
import { useState, useEffect } from "react";

import "./index.css";

const savedLikes = JSON.parse(localStorage.getItem("likedNames")) ?? [];

function App() {
  const [urlGp, setUrlGp] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getUrl() {
      try {
        const url = "http://hp-api.herokuapp.com/api/characters";
        const data = await (await fetch(url)).json();
        setUrlGp(data);
        setIsLoading(false);
      } catch (e) {
        setError(true);
        setIsLoading(false);
      }
    }
    getUrl();
  }, []);

  const [liked, setLiked] = useState(savedLikes);
  const like = (name) => setLiked((p) => [...p, name]);
  const dislike = (name) => setLiked((p) => p.filter((elem) => elem !== name));

  useEffect(() => {
    localStorage.setItem("likedNames", JSON.stringify(liked));
  }, [liked]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            isLoading={isLoading}
            urlGp={urlGp}
            error={error}
            liked={liked}
            like={like}
            dislike={dislike}
          />
        }
      />
      <Route
        path="/like"
        element={
          <Like like={like} dislike={dislike} urlGp={urlGp} liked={liked} />
        }
      />
    </Routes>
  );
}

export default App;
