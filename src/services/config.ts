
const baseEndpoint = 'https://driblar-cors.herokuapp.com/https://projetoads20220530161300.azurewebsites.net'
/**
 * POST para login.
 * User deve ir no body.
 * Retorna um token.
 */
export const loginEndpoint = `${baseEndpoint}/api/auth/login`;

/**
 * POST para registro
 * User deve ir no body.
 * Retorna um token.
 */
 export const registerEndpoint = `${baseEndpoint}/api/auth/register`;

/** 
 * GET, POST.
 * Para PUT, passar o id no json.
 * Para GET de um jogo específico, acrescentar /idDoJogo
 */
export const endpoint = `${baseEndpoint}/api/goodbrowsergame`;
/** 
 * GET e POST.
 * Para GET ou PUT de uma categoria específica, acrescentar /idCategoria
 */
export const categoryEndpoint = `${baseEndpoint}/api/category`;

export const browserGameReviewsEndpoint = `${baseEndpoint}/api/evaluation`

export const userEndpoint = `${baseEndpoint}/api/user`;

export const loggedInUserEndpoint = `${baseEndpoint}/api/auth/loggedin`

export const evaluationDetailsEndpoint = `${baseEndpoint}/api/evaluation-details`

export const reportsEndpoint = `${baseEndpoint}/api/report`