// CSS
import "./App.css";
// tmdb
import Tmdb from "./tmdb";
// Hooks
import { useEffect, useState } from "react";
// Components
import MovieRow from "./components/MovieRow";

export default () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    // Quando a tela for carregada (F5), vai executar este codigo.
    const loadAll = async () => {
      // Pega a lista total dos filmes.
      let list = await Tmdb.getHomeList();
      setMovieList(list);
    };
    loadAll();
  }, []);

  return (
    <div className="page">
      <section className="lists">
        {movieList.map((movie, key) => (
          <MovieRow key={key} title={movie.title} items={movie.items} />
        ))}
      </section>
    </div>
  );
};
