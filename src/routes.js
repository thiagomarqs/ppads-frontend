import { Route, Routes, Router } from "react-router-dom";
import { AdminPaths } from "./pages/Admin/AdminPaths";
import Admin from "./pages/Admin/Admin";
import DefaultPage from "./pages/DefaultPage";
import { useParams } from "react-router-dom";

export default function AppRouter() {
  
  const Wrapper = (props) => {
    const params = useParams();
    return <Admin path={props.path} {...{...props, match: {params}} } />
  }

  return (
    <div className="App d-flex flex-row">
      <Router >
        <div className="main-content">
          <Routes >
            <Route path='/'>
              <Route path="admin" element={<DefaultPage />}>
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
              </Route>
            </Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}