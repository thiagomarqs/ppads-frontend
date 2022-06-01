import { useEffect, useState } from "react"
import { Categoria } from '../../../../entities/Categoria';
import { CategoryService } from "../../../../services/CategoryService";

const categoryService = new CategoryService();

export default function Top3BestEvaluatedCategories() {

  const [categoriesNames, setCategoriesNames] = useState<string[]>([]);

  useEffect(() => {
    categoryService
      .getAllCategories()
      .then(c => c.data.data.map(c => c.nome))
      .then(c => setCategoriesNames(([...c] as string[])))
  })

  return (
    <div>
      <h1>3 Categorias Mais Bem Avaliadas</h1>
      {categoriesNames.map(name => <h2>{name}</h2>)}
    </div>
  )
}