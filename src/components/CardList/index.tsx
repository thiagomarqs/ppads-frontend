import { BrowserGame } from "../../entities/BrowserGame"
import Card from "../Card";
import styles from './CardList.module.scss';

interface Props {
  games: BrowserGame[];
  nothingFoundMessage?: string;
}

const NothingFoundMessage = (props: {message?: string}) => {
  return (
    <div>
      <p style={{fontSize: '72px'}}>💭</p>
      <p>{props.message || 'Não encontramos nada'}</p>
    </div>
  )
}

export default function CardList(props: Props) {
  return (
    <div className={styles.cardList}>
      {
        props.games.length === 0
          ?
          <NothingFoundMessage message={props.nothingFoundMessage}/>
          :
          props.games?.map(game => <Card key={game.id}{...game} />)
      }
    </div>
  );
}