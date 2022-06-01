import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CardList from '../../../components/CardList';
import { BrowserGameService } from '../../../services/BrowserGameService';
import { CategoryService } from '../../../services/CategoryService';
import DefaultContent from '../../DefaultPage/DefaultContent';

const browserGamesService = new BrowserGameService();
const categoryService = new CategoryService();

export default function Category() {

  const [titulo, setTitulo] = useState<string>('Categoria');
  const [browserGames, setBrowserGames] = useState<any[]>();
  const { id } = useParams();

  useEffect(
    () => {
      categoryService.getCategoryById(Number(id))
        .then(response => setTitulo((response.data.data.nome as string)))
    }, [id]);

  useEffect(
    () => {
      browserGamesService.getByCategoryId(Number(id))
        .then(response => {
          let browserGames = response.data.data || [];
          browserGames.sort((curr, next) => curr.nome.localeCompare(next.nome))
          setBrowserGames(response.data.data)
        });
    });

  return (
    <DefaultContent titulo={titulo} >
      <CardList games={browserGames || []} />
    </DefaultContent>
  )
}