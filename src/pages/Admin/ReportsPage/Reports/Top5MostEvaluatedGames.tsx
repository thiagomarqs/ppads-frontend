import { useEffect, useState } from "react";
import CardList from "../../../../components/CardList";
import { BrowserGame } from "../../../../entities/BrowserGame";
import { BrowserGameService } from "../../../../services/BrowserGameService";
import { ReportsService } from "../../../../services/ReportsService";

const reportsService = new ReportsService();

export default function Top5MostEvaluatedGames () {
  
  const [games, setGames] = useState<BrowserGame[]>([]);

  useEffect(() => {
    reportsService
      .getTop5GoodBrowserGames(sessionStorage.getItem('token'))
      .then(r => setGames(r.data.data))
  }, [])
  
  return(
    <div>
      <h1>Top 5 Jogos Mais Bem Avaliados</h1>
      <CardList nothingFoundMessage='Nenhum jogo encontrado!' games={games || []} />
    </div>
  )
}