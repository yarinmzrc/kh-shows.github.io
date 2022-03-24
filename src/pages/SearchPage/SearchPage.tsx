import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import axios from "axios";
import { Shows } from "../../components/Shows/Shows";
import { IShow } from "../../types/interfaces/interfaces";


export const SearchPage = () => {
    const params: any = useParams();
    const [shows, setShows] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const getSearchedShows = async (name: string) => {
      setIsLoading(true);
      const result = await axios.get(`https://api.tvmaze.com/search/shows?q=${name}`)
      if(result) {
        const newShows = result.data.map((res: IShow) => res.show);
        setShows(newShows);
      }
      setIsLoading(false);
    }

    useEffect(() => {
      getSearchedShows(params.search);
    }, [params.search])

    
  return isLoading ? <h1>Loading...</h1> : (
      <Shows shows={shows} />
  )
}
