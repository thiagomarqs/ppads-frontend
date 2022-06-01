import { ButtonClickEvent } from "devextreme/ui/drop_down_button";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Evaluation } from "../../entities/Evaluation";
import { EvaluationPOSTRequest } from "../../models/Request/Evaluation/EvaluationPOSTRequest";
import { EvaluationPUTRequest } from "../../models/Request/Evaluation/EvaluationPUTRequest";
import { EvaluationService } from "../../services/EvaluationService";
import Form from "../Form";
import styles from './ReviewForm.module.scss'

const evaluationService = new EvaluationService();

interface ReviewFormProps extends React.PropsWithChildren<any> {
  review: string;
  rating: number;
  gameId: number;
  isEditing?: boolean;
  reviewId?: number;
}

let buttons:any[] = []

export default function ReviewForm(props: ReviewFormProps) {

  if(props.isEditing) {
    buttons = [
      { key:"edit", message: 'Editar', className: 'btn btn-primary', onClick: (e: ButtonClickEvent) => sendUpdate(e) }
    ]
  }
  else {
    buttons = [
      { key:"new", message: 'Enviar', className: 'btn btn-primary', onClick: (e: any) => sendReview(e) }
    ]
  }

  const navigate = useNavigate();

  const sendReview = (e: any) => {
    e.preventDefault();
    const userId = Number(sessionStorage.getItem('userId'));
    const review: EvaluationPOSTRequest = {
      Descricao: props.review,
      QntEstrelas: props.rating,
      GoodBrowserGameId: props.gameId,
      UserId: 7
    }
    evaluationService.create(review)
      .then(r => navigate('/recomendados'))
  }

  const sendUpdate = (e: any) => {
    e.preventDefault()
    const userId = Number(sessionStorage.getItem('userId'));
    const review: EvaluationPUTRequest = {
      Descricao: props.review,
      QntEstrelas: props.rating,
      GoodBrowserGameId: props.gameId,
      Id: props.reviewId
    }
    evaluationService.update(review)
      .then(r => navigate('/recomendados'))
  }

  return (
    <div className={styles.form}>
      <Form buttons={buttons}>
        {props.children}
      </Form>
    </div>
  )
}