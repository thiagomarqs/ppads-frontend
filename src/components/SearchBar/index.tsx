import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BrowserGameService } from '../../services/BrowserGameService';
import styles from './SearchBar.module.scss';

const browserGamesService = new BrowserGameService();

export default function SearchBar() {

  const navigate = useNavigate();
  const [searchString, setSearchString] = useState('');

  const handleSearch = (searchString: string) => {
    let search = searchString;
    navigate(`/resultados-pesquisa/${search}`)
    setSearchString('');
    (document.querySelector('.search-bar') as HTMLInputElement).value = '';
  }

  return (
    <div className={styles.searchBar}>
      <input onChange={(event) => setSearchString(event.target.value)} className="search-bar form-control" type={"text"} placeholder="Pesquisar"></input>
      <button onClick={() => handleSearch(searchString)} className={'btn btn-light'}>🔎</button>
    </div>
  )
}