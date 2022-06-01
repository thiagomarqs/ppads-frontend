import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Review from '../../../../components/Review';
import styles from './Reviews.module.scss';
import ReviewForm from '../../../../components/ReviewForm';
import { Evaluation } from '../../../../entities/Evaluation';

export default function Reviews(props: { reviews: Evaluation[] | undefined, sortReviews: () => void }) {

  const [showReviewForm, setShowReviewForm] = useState<boolean>(false);
  const [showEditReviewForm, setShowEditReviewForm] = useState<boolean>(false);
  const [review, setReview] = useState<string>('');
  const [rating, setRating] = useState<number>(0);
  const [editReview, setEditReview] = useState<string>('');
  const [editRating, setEditRating] = useState<number>(0);
  const [editReviewId, setEditReviewId] = useState<number>(0);
  const { id } = useParams()


  return (
    <div className={styles.reviews}>
      <h2>Avaliações</h2>
      <div className={styles.actions}>
        <button onClick={() => setShowReviewForm(prev => !prev)} className='btn btn-light'>Deixar avaliação</button>
        <button onClick={() => props.sortReviews()} className='btn btn-light'>Ordenar</button>
      </div>
      <div className={`${styles.reviewForm} ${showReviewForm ? styles.showReviewForm : styles.hideReviewForm}`}>
        <ReviewForm review={review} rating={rating} gameId={Number(id)}>
          <div className="form-group">
            <h4>✍️ Avaliação</h4>
            <textarea onChange={e => setReview(e.target.value)} className='form-control' rows={3} maxLength={255} required></textarea>
          </div>
          <div className="form-group">
            <h4>⭐ Nota (de 0 a 5)</h4>
            <input onChange={e => setRating(Number(e.target.value))} value={rating} className={`form-control ${styles.rating}`} type='number' min={1} max={5} required />
          </div>
        </ReviewForm>
      </div>
      <div className={`${styles.editReviewForm} ${showEditReviewForm ? styles.showEditReviewForm : styles.hideEditReviewForm}`}>
        <ReviewForm review={editReview} rating={editRating} gameId={Number(id)} isEditing={true} reviewId={editReviewId}>
          <div className="form-group">
            <h4>✍️ Avaliação</h4>
            <textarea onChange={e => setEditReview(e.target.value)} value={editReview} className='form-control' rows={3} maxLength={255} required></textarea>
          </div>
          <div className="form-group">
            <h4>⭐ Nota (de 0 a 5)</h4>
            <input onChange={e => setEditRating(Number(e.target.value))} value={editRating} className={`form-control ${styles.rating}`} type='number' min={1} max={5} required />
          </div>
        </ReviewForm>
      </div>
      <div>
        {props.reviews?.map((review, index) => <Review key={index} {...review} setShowEditReviewForm={setShowEditReviewForm} setEditReview={setEditReview} setEditRating={setEditRating} setEditReviewId={setEditReviewId} />) || []}
      </div>
    </div>
  )
}