import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CardList from '../../../components/CardList';
import { BrowserGame } from '../../../entities/BrowserGame';
import { BrowserGameGETResponse } from '../../../models/Response/BrowserGame/BrowserGameGETResponse';
import { BrowserGameService } from '../../../services/BrowserGameService';
import DefaultContent from '../../DefaultPage/DefaultContent';

const browserGamesService = new BrowserGameService();

export default function GameSearchResults() {

  const [browserGames, setBrowserGames] = useState<BrowserGame[]>();
  const navigate = useNavigate();
  const { nomeJogo } = useParams();

  useEffect(
    () => {
      browserGamesService.getBrowserGames()
        .then(response => setBrowserGames(
          response.data.data
            .filter(game => game.nome.toLocaleLowerCase()
              .split(' ')
              .some(word => nomeJogo?.includes(word))
            )
          )
        )
    }, []);

  return (
    <DefaultContent titulo={`Resultados da pesquisa por: ${nomeJogo}`} >
      <CardList nothingFoundMessage='Nenhum jogo encontrado!' games={browserGames || []} />
    </DefaultContent>
  )
}