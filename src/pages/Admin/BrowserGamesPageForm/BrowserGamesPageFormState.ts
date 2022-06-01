export interface BrowserGamesPageFormState {
  nome: string;
  idCategoria: number;
  urlJogo: string;
  urlVideoDemonstracao: string;
  descricao: string;
  urlImagemIlustrativa: string;
  isSubmitted: boolean;
  returnToHome?: boolean;
  isLoading?: boolean;
  categorias: any[];
  categoriasChoices: any[];
}