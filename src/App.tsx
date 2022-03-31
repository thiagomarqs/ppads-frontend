import Admin from './pages/Admin/Admin';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import { AdminPaths } from './pages/Admin/AdminPaths';
import { Paths } from './enums/Paths';
import { BrowserGameService } from './services/BrowserGameService';

function App() {
  
  const Wrapper = (props: any) => {
    const params = useParams();
    return <Admin path={props.path} {...{...props, match: {params}} } />
  }

  return (
    <Router>
      <div className="App d-flex flex-row">
        <Sidebar listItems={
            [
              {title: 'Relatórios', link: '/admin/relatorios'},
              {title: 'Categorias', link: '/admin/categorias'},
              {title: 'Browser Games', link: '/admin/browser-games'}
            ]
          }/>
          
        <div className="main-content">
          <Routes >
            <Route 
              path={`${Paths.ADMIN}/${AdminPaths.RELATORIOS}`} 
              element={<Admin path={AdminPaths.RELATORIOS}/>}
            />
            <Route 
              path={`${Paths.ADMIN}/${AdminPaths.CATEGORIAS}`} 
              element={<Admin path={AdminPaths.CATEGORIAS}/>}
            />
            <Route 
              path={`${Paths.ADMIN}/${AdminPaths.BROWSER_GAMES}`} 
              element={<Admin path={AdminPaths.BROWSER_GAMES}/>}
            />
            <Route 
              path={`${Paths.ADMIN}/${AdminPaths.BROWSER_GAMES_NEW}`} 
              element={<Admin path={AdminPaths.BROWSER_GAMES_NEW}/>}
            />
            <Route 
              path={`${Paths.ADMIN}/${AdminPaths.BROWSER_GAMES_EDIT_ID}`} 
              element={<Wrapper path={AdminPaths.BROWSER_GAMES_EDIT_ID}/>}
            />
            <Route 
              path={`${Paths.ADMIN}/${AdminPaths.BROWSER_GAMES_DELETE_ID}`} 
              element={<Wrapper path={AdminPaths.BROWSER_GAMES_DELETE_ID}/>}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
