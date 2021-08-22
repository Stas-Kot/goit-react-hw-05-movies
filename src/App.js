import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import './App.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import AppBar from 'components/AppBar/AppBar';
import Spinner from './components/Loader/Loader';
// import HomeView from './views/HomeView';
// import Movies from './views/Movies';
// import MovieInfo from './views/MovieInfo/MovieInfo';

const HomeView = lazy(() =>
  import('./views/HomeView.js' /* webpackChunkName: "home-view" */),
);
const MovieInfo = lazy(() =>
  import('./views/MovieInfo/MovieInfo.js' /* webpackChunkName: "movie-info" */),
);
const Movies = lazy(() =>
  import('./views/Movies.js' /* webpackChunkName: "movies" */),
);

function App() {
  return (
    <>
      <AppBar />
      <Suspense fallback={<Spinner />}>
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
      </Suspense>
      <ToastContainer autoClose={3000} />
    </>
  );
}

export default App;
