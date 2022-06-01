import React, { Dispatch, SetStateAction } from "react";
import { useEffect, useLayoutEffect, useState } from "react";
import { Evaluation } from "../../entities/Evaluation";
import { EvaluationDetailsPOSTRequest } from "../../models/Request/EvaluationDetails/EvaluationDetailsPOSTRequest";
import { AuthService } from "../../services/AuthService";
import { EvaluationDetailsService } from "../../services/EvaluationDetailsService";
import styles from './Review.module.scss';

const authService = new AuthService();
const evaluationDetailsService = new EvaluationDetailsService();

interface Props extends Evaluation {
  setShowEditReviewForm: Dispatch<SetStateAction<boolean>>;
  setEditRating: React.Dispatch<React.SetStateAction<number>>;
  setEditReview: React.Dispatch<React.SetStateAction<string>>;
  setEditReviewId: React.Dispatch<React.SetStateAction<number>>;
}

export default function Review(props: Props) {

  const [reviewerUsername, setReviewerUsername] = useState<string>();
  const [likes, setLikes] = useState<number>();
  const [hasLikedAlready, setHasLikedAlready] = useState<boolean>(false);

  const hasUserLikedAlready = () => {
    return evaluationDetailsService
      .hasUserLikedThisEvaluationAlready(props.id, Number(sessionStorage.getItem('userId')))
      .then(r => setHasLikedAlready(!!r.data.data))
  }

  const updateLikes = () => {
    evaluationDetailsService
      .getTotalOfLikesOfAnEvaluation(props.id)
      .then(r => setLikes(r.data.data.total))
  }

  const like = () => {
    let likePostRequest: EvaluationDetailsPOSTRequest = {
      UserIdUtilPraMim: Number(sessionStorage.getItem('userId')),
      EvaluationId: props.id
    };

    if (!hasLikedAlready) {
      evaluationDetailsService
        .create(likePostRequest)
        .then(r => updateLikes())
        .catch(error => console.error(error))
    }
    else {
      alert("Você já marcou essa avaliação como útil!")
    }
  };

  const edit = () => {
    props.setShowEditReviewForm(true);
    props.setEditRating(props.qntEstrelas);
    props.setEditReview(props.descricao);
    props.setEditReviewId(props.id);
  }

  useLayoutEffect(() => {
    hasUserLikedAlready();
    updateLikes();

    authService.getUserById(props.userId)
      .then(r => setReviewerUsername(r.data.username));
  }, [likes]);

  return (
    <div className={styles.reviewContainer}>
      <div className={styles.header}>
        <h4>{reviewerUsername}</h4>
        <p>{props.qntEstrelas} estrelas</p>
      </div>
      <div className={styles.review}>
        <p>{props.descricao}</p>
      </div>
      <div className={styles.likes}>
        <div className={styles.likesCounter}>{likes}</div>
        <button className={`${styles.likeButton} btn btn-primary`} onClick={() => like()}>👍</button>
        {props.userId == Number(sessionStorage.getItem('userId')) ? <button className="btn btn-secondary" onClick={() => edit()}>Editar</button> : ''}
      </div>
    </div>
  )
}