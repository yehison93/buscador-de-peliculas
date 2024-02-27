import { useState, useEffect } from "react"


const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMjI5NzI4OTg2YjUwZGU0YzU5NWFmYTJiMGIwY2ViYyIsInN1YiI6IjY1YmY5ZDE5ZmM2NTM4MDE0OWU5NTEyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wy_j_XgfQZ9LhUf-Y47hrtWcZqoX7FCKmAW2S_5Sp1Q'
  }
};
const urlSearchApi = (type, search) =>{ return (`https://api.themoviedb.org/3/search/${type}?query=${search}&include_adult=true&language=es-LAT&page=1`)} 
// const urlGetDetailApi = (id, type) =>{ return (`https://api.themoviedb.org/3/${type}/${id}?language=en-USapi_key=${apiKey}`)}
const urlTrendingApi = `https://api.themoviedb.org/3/trending/all/day?language=es-LAT`


const useFetchData = (search) => {
  const [data, setData] = useState();
  const getSearch = search.search?.split(' ').join('%').trim();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch((search.search?(urlSearchApi(search.type, getSearch)):urlTrendingApi), options);
      const json = await res.json();
      setData(json);
    };
  
    fetchData();
  }, [getSearch, search]);

  return [data];
}

export default useFetchData;