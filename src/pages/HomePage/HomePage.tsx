import { useEffect, useState } from 'react'

import axios from 'axios';

import { Shows } from '../../components/Shows/Shows'

export const HomePage = () => {
  const [shows, setShows] = useState([]);

  const getShows = async () => {
      const exist = localStorage.getItem('shows');
      if(exist) {
        setShows(JSON.parse(exist));
      } else {
        const result = await axios.get('https://api.tvmaze.com/shows')
        localStorage.setItem("shows", JSON.stringify(result.data));
        setShows(result.data);
      }
  }

  useEffect(() => {
    getShows();
  }, [])

  return (
    <Shows shows={shows} /> 
  )
}
