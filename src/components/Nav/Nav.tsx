import { useNavigate } from 'react-router-dom';
import './Nav.scss';

export const Nav = () => {
  const navigate = useNavigate();

  return (
    <div className="nav">
        <h1 onClick={() => navigate('/')} className='title'>KH<span className="shows-title">Shows</span></h1>
    </div>
  )
}
