// CSS
import "./App.css";
// tmdb
import Tmdb from "./tmdb";
// Hooks
import { useEffect, useState } from "react";
// Components
import MovieRow from "./components/MovieRow";
import BannerMovie from "./components/BannerMovie";
import Header from "./components/Header";

export default () => {
  const [movieList, setMovieList] = useState([]);
  const [featureData, setFeatureData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    // Quando a tela for carregada (F5), vai executar este codigo.
    const loadAll = async () => {
      // Pega a lista total dos filmes.
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      // Pega o Filme em Destaque.
      let originals = list.filter((movie) => movie.slug === "originals");
      let randomMovie = Math.floor(
        Math.random() * originals[0].items.results.length - 1
      );
      let movie = originals[0].items.results[randomMovie];
      let movieInfo = await Tmdb.getMovieInfo(movie.id, "tv");
      setFeatureData(movieInfo);
    };
    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };

    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <div className="page">
      <Header black={blackHeader} />
      {featureData && <BannerMovie item={featureData} />}
      <section className="lists">
        {movieList.map((movie, key) => (
          <MovieRow key={key} title={movie.title} items={movie.items} />
        ))}
      </section>
      <footer>
        @Fábio Bronze <br /> @Netflix
      </footer>

      {movieList.length <= 0 && (
        <div className="loading">
          <img
            src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif"
            alt="Loading..."
          />
        </div>
      )}
    </div>
  );
};
