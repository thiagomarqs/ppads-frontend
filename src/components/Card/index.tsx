import { useEffect, useLayoutEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BrowserGame } from "../../entities/BrowserGame";
import { CategoryService } from "../../services/CategoryService";
import styles from './Card.module.scss';

const categoryService = new CategoryService();


interface Props extends BrowserGame {

}

export default function Card(props: Props) {

  const navigate = useNavigate();
  const [categoryName, setCategoryName] = useState<string | undefined>('Nome da Categoria');

  useLayoutEffect(() => {
    categoryService.getCategoryById(props.idCategoria)
      .then(r => setCategoryName(r.data.data.nome));
  }, []);

  return (
    <div className={styles.cardContainer} onClick={() => navigate(`/browsergame/${props.id}`)}>
      <div className={styles.cardImage}>
        <img src={props.urlImagemIlustrativa}></img>
      </div>
      <div className={styles.cardInfo}>
        <h3>{props.nome}</h3>
        <h4>{categoryName}</h4>
        <p>{props.descricao}</p>
      </div>
    </div>
  )
}