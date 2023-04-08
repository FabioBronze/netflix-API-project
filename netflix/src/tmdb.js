const API_KEY = "f5c6461a7e500b4743c0d5a4c2ddb6a7";
const API_BASE = "https://api.themoviedb.org/3";

const myFetch = async (endpoint) => {
  const res = await fetch(`${API_BASE}${endpoint}`);
  const data = await res.json();
  return data;
};

export default {
  getHomeList: async () => {
    return [
      {
        slug: "originals",
        title: "Netflix Originals",
        items: await myFetch(
          `/discover/tv?with_network=213&api_key=${API_KEY}`
        ),
      },
      {
        slug: "trending",
        title: "Recommended for you",
        items: await myFetch(`/trending/all/week?api_key=${API_KEY}`),
      },
      {
        slug: "toprated",
        title: "Top Rated",
        items: await myFetch(`/movie/top_rated?api_key=${API_KEY}`),
      },
      {
        slug: "action",
        title: "Action",
        items: await myFetch(
          `/discover/movie?with_genres=28&api_key=${API_KEY}`
        ),
      },
      {
        slug: "comedy",
        title: "Comedy",
        items: await myFetch(
          `/discover/movie?with_genres=35&api_key=${API_KEY}`
        ),
      },
      {
        slug: "horror",
        title: "Horror",
        items: await myFetch(
          `/discover/movie?with_genres=27&api_key=${API_KEY}`
        ),
      },
      {
        slug: "romance",
        title: "Romance",
        items: await myFetch(
          `/discover/movie?with_genres=10749&api_key=${API_KEY}`
        ),
      },
      {
        slug: "documentary",
        title: "Documentary",
        items: await myFetch(
          `/discover/movie?with_genres=99&api_key=${API_KEY}`
        ),
      },
    ];
  },
};
