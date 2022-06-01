import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../../components/Card';
import CardList from '../../../components/CardList';
import { Categoria } from '../../../entities/Categoria';
import { BrowserGameService } from '../../../services/BrowserGameService';
import { CategoryService } from '../../../services/CategoryService';
import DefaultContent from '../../DefaultPage/DefaultContent';

const browserGamesService = new BrowserGameService();
const categoryService = new CategoryService();

export default function Recommended() {

  const [browserGames, setBrowserGames] = useState<any[]>();
  const navigate = useNavigate();

  useEffect(
    () => {
      browserGamesService.getBrowserGames()
        .then(response => setBrowserGames(response.data.data))
        .catch(error => console.log(error))
    }, []);

  return (
    <DefaultContent titulo='Recomendados' >
      <CardList nothingFoundMessage='Nenhum jogo encontrado!' games={browserGames || []} />
    </DefaultContent>
  )
}