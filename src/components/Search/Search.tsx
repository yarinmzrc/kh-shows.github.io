import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import './Search.scss';

export const Search = () => {
    const [searchValue, setSearchValue] = useState('')
    const navigate = useNavigate();

    const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    }

    const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        navigate(`/${searchValue}`)
        setSearchValue('');
    }

  return (
      <div className='input-wrapper'> 
      <form className='form' onSubmit={handleSearch}>
        <input placeholder='Search...' className='input-search' type="text" value={searchValue} onChange={handleChangeValue} />
        <button className='button-search' type="submit">Search</button>
          </form>      
      </div>
  )
}
