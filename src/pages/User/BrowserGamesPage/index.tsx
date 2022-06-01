import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom"
import { BrowserGame } from "../../../entities/BrowserGame";
import { Evaluation } from "../../../entities/Evaluation";
import { BrowserGameService } from "../../../services/BrowserGameService";
import { EvaluationService } from "../../../services/EvaluationService";
import styles from './BrowserGamesPage.module.scss';
import Reviews from "./Reviews";

const browserGameService = new BrowserGameService();
const evaluationService = new EvaluationService();


export default function BrowserGamesPage() {

  const { id } = useParams();
  const [browserGame, setBrowserGame] = useState<BrowserGame>();
  const [reviews, setReviews] = useState<Evaluation[]>();

  const sortReviews = () => {
    let sortedReviews: any[] = []
    if (reviews) {
      sortedReviews = reviews?.sort((a, b) => {
        if (a.qntEstrelas < b.qntEstrelas) return 1
        else if (a.qntEstrelas == b.qntEstrelas) return 0;
        else return -1;
      })
    }
    console.log(sortedReviews)
    setReviews([...sortedReviews]);
  }

  useEffect(() => {
    let isMounted = true;
    browserGameService.getBrowserGame(Number(id))
      .then(r => {
        if(isMounted) setBrowserGame(r.data.data)
      })
    return () => { isMounted = false };
  }, []);

  useEffect(() => {
    let isMounted = true;
    evaluationService.getBrowserGameReviews(Number(id))
      .then(response => {
        if(isMounted) setReviews(response.data.data)
      })
    return () => { isMounted = false };
  }, []);

  return (

    <div className={styles.container}>
      <h1>{browserGame?.nome}</h1>
      <div className={styles.info}>
        <div className={styles.media}>
          <img src={browserGame?.urlImagemIlustrativa}></img>
        </div>
        <div className={styles.description}>
          <h2>Descrição</h2>
          <p>{browserGame?.descricao}</p>
          <h3>Link para o jogo</h3>
          <a href={browserGame?.urlJogo}>{browserGame?.urlJogo}</a>
          <h3>Link para o vídeo</h3>
          <a href={browserGame?.urlVideoDemonstracao}>{browserGame?.urlVideoDemonstracao}</a>
        </div>
        <hr />
      </div>
      <div className={styles.reviews}>
        <Reviews reviews={reviews} sortReviews={sortReviews} />
      </div>
    </div>
  )
}