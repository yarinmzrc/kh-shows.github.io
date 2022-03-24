import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

import { IShow } from "../../types/interfaces/interfaces";

import './ShowPage.scss';


export const ShowPage = () => {
    const [show, setShow] = useState<IShow>();
    const [loading, setLoading] = useState(false);
    const params = useParams()

    const fetchData = async () => {
        setLoading(true);
        const result = await axios.get(`https://api.tvmaze.com/shows/${params.show}`);
        if(result) {
            setShow(result.data);
            console.log(result.data);
        }
        setLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, [params.show])

  return loading ? <h1>Loading...</h1> : (
    <div className="show-wrapper">
        <img className="show-image" src={show?.image.medium} alt={show?.name} />
        <div className="show-content">
            <div className="title">
            <h1>{show?.name}</h1> <span className="show-rating">{show?.rating.average}</span>
            </div>
            {show?.genres.map((genreshow) => {
                return (
                    <button className="btn" key={genreshow}>{genreshow}</button>
                )
            })}
            <p className="show-summary">{show?.summary.replace(/<(.|\n)*?>/g, '')}</p>
            <a className="show-site" href={show?.url}>Official Site</a>
        </div>
    </div>
  )
}
