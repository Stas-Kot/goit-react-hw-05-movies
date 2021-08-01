import { Route, Switch } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import './App.css';
import AppBar from 'components/AppBar/AppBar';
import HomeView from './views/HomeView';
import Movies from './views/Movies';
import MovieInfo from './views/MovieInfo/MovieInfo';

function App() {
  return (
    <>
      <AppBar />

      <Switch>
        <Route path="/movies" exact>
          <Movies />
        </Route>
        <Route path="/movies/:movieId">
          <MovieInfo />
        </Route>
        <Route>
          <HomeView />
        </Route>
      </Switch>
      <ToastContainer autoClose={3000} />
    </>
  );
}

export default App;
