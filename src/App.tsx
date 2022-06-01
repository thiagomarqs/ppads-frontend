import Admin from './pages/Admin/Admin';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import { AdminPaths } from './pages/Admin/AdminPaths';
import { Paths } from './enums/Paths';
import { BrowserGameService } from './services/BrowserGameService';
import DefaultPage from './pages/DefaultPage';
import Recommended from './pages/User/RecommendedPage';
import NotFoundPage from './pages/NotFound';
import Home from './pages/Home';
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';
import UpdateProfile from './pages/User/UpdateProfilePage';
import { useEffect, useState } from 'react';
import { CategoryService } from './services/CategoryService';
import BrowserGamesPage from './pages/User/BrowserGamesPage';
import Category from './pages/User/CategoryPage';
import AdminLogin from './pages/Admin/Login';
import DefaultAdminPage from './pages/Admin/DefaultAdminPage';
import { Categoria } from './entities/Categoria';
import GameSearchResults from './pages/User/GameSearchResults';

const categoryService = new CategoryService();

function App() {

  const Wrapper = (props: any) => {
    const params = useParams();
    return <Admin path={props.path} {...{ ...props, match: { params } }} />
  }

  const [categories, setCategories] = useState([]);

  const [userSidebarItems, setUserSidebarItems] = useState([
    { title: 'Recomendados', link: 'recomendados' }
  ]);

  useEffect(() => {
    //@ts-ignore
    setUserSidebarItems(() => [{ title: 'Recomendados', link: 'recomendados' }].concat(categories.map((c) => { return { title: c.nome, link: `categorias/${c.id}` } })));
  }, [categories]);

  return (
    <Router>
      <div className="App d-flex flex-row">
        <div className="main-content">
          <Routes >

            <Route path='/' element={<Home />} />

            <Route path='/'>
              <Route path='/registro' element={<SignUp />} />
              <Route path='/login' element={<Login />} />
            </Route>

            <Route path="/" element={<DefaultPage setCategories={setCategories} listItems={userSidebarItems} />}>
              <Route path='recomendados' element={<Recommended />} />
              <Route path='resultados-pesquisa/:nomeJogo' element={<GameSearchResults/>} />
              <Route path='categorias/:id' element={<Category />} />
              <Route path='perfil' element={<UpdateProfile />} />
              <Route path='browsergame/:id' element={<BrowserGamesPage />} />

            </Route>


            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin" element={<DefaultAdminPage listItems={
              [
                { title: 'Relatórios', link: '/admin/relatorios' },
                { title: 'Categorias', link: '/admin/categorias' },
                { title: 'Browser Games', link: '/admin/browser-games' }
              ]
            } />}>
              <Route
                path={`${AdminPaths.RELATORIOS}`}
                element={<Admin path={AdminPaths.RELATORIOS} />}
              />
              <Route
                path={`${AdminPaths.CATEGORIAS}`}
                element={<Admin path={AdminPaths.CATEGORIAS} />}
              />
              <Route
                path={`${AdminPaths.BROWSER_GAMES}`}
                element={<Admin path={AdminPaths.BROWSER_GAMES} />}
              />
              <Route
                path={`${AdminPaths.BROWSER_GAMES_NEW}`}
                element={<Admin path={AdminPaths.BROWSER_GAMES_NEW} />}
              />
              <Route
                path={`${AdminPaths.BROWSER_GAMES_EDIT_ID}`}
                element={<Wrapper path={AdminPaths.BROWSER_GAMES_EDIT_ID} />}
              />
              <Route
                path={`${AdminPaths.BROWSER_GAMES_DELETE_ID}`}
                element={<Wrapper path={AdminPaths.BROWSER_GAMES_DELETE_ID} />}
              />
              <Route
                path={`${AdminPaths.CATEGORIA_NEW}`}
                element={<Wrapper path={AdminPaths.CATEGORIA_NEW} />}
              />
              <Route
                path={`${AdminPaths.CATEGORIA_EDIT_ID}`}
                element={<Wrapper path={AdminPaths.CATEGORIA_EDIT_ID} />}
              />
              <Route
                path={`${AdminPaths.CATEGORIA_DELETE_ID}`}
                element={<Wrapper path={AdminPaths.CATEGORIA_DELETE_ID} />}
              />
            </Route>

            <Route path='*' element={<NotFoundPage />} />

          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
