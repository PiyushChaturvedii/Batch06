import { useState, useEffect } from "react";

export const useFetch = (apiPath, queryTerm = "") => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = new URL(`https://api.themoviedb.org/3/${apiPath}`);
    url.searchParams.set("api_key", process.env.REACT_APP_API_KEY);

    if (queryTerm) {
      url.searchParams.set("query", queryTerm);
    }

    async function fetchMovies() {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(Array.isArray(json.results) ? json.results : []);
      } catch (error) {
        setData([]);
      }
    }

    fetchMovies();
  }, [apiPath, queryTerm]);

  return { data };
};
