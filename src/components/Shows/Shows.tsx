import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Pagination } from "../Pagination/Pagination";

import { IShow, IShows } from "../../types/interfaces/interfaces";

import './Shows.scss';

export const Shows: FC<IShows> = ({shows}) => {
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const [showsPerPage] = useState(28);

  const indexOfLastShow = currentPage * showsPerPage;
  const indexOfFirstShow = indexOfLastShow - showsPerPage;
  const currentShows = shows.slice(indexOfFirstShow, indexOfLastShow);

  const handleClick = (id: number) => {
    navigate(`/show/${id}`)
  }

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  }

  return ( 
    <div className="page-wrapper">
    <div className="shows-wrapper">
      {currentShows?.map((show: IShow) => {
        return (
          <div onClick={() => handleClick(show.id)} className="show-card" key={show.id}>
              <img className="show-image" src={show?.image?.medium || "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/No_picture_available.png/602px-No_picture_available.png"} alt={show.name} />
            <div className="show-content">
              <div className="show-content-up">
              <p className="show-name">{show.name}</p>
              <p className={show.rating.average > 8 ? 'show-rating-good' : show.rating.average > 6 ? 'show-rating-medium' : 'show-rating-bad'}>{show.rating.average}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
      <Pagination showsPerPage={showsPerPage} totalShows={shows.length} paginate={paginate} currentPage={currentPage} />
      </div>
)
}
