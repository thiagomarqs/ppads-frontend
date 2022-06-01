import { useNavigate } from "react-router-dom"
import styles from "./NotFound.module.scss"

export default function NotFoundPage() {
  
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h1>Página não encontrada!</h1>
      <p>Não conseguimos encontrar a página que você estava procurando.</p>
      <div>
        <button className='btn btn-primary' onClick={() => navigate(-1)}>Voltar para a página anterior.</button>
      </div>
    </div>
  )
}