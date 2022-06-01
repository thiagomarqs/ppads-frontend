import { useEffect, useState } from "react"
import CardList from "../../../../components/CardList";
import { BrowserGame } from "../../../../entities/BrowserGame";
import { BrowserGameService } from "../../../../services/BrowserGameService";

const browserGameService = new BrowserGameService();

export default function Top5GamesByAverageGrade () {

  const [games, setGames] = useState<BrowserGame[]>([]);

  useEffect(() => {
    browserGameService
      .getBrowserGames()
      .then(r => setGames(r.data.data))
  }, [])

  return (
    <div>
      <h1>Top 5 Jogos Pela Nota Média</h1>
      <CardList nothingFoundMessage='Nenhum jogo encontrado!' games={games || []} />
    </div>
  )
}