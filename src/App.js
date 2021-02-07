import { useEffect, lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { authOperations } from './redux/auth';
import PublicRoute from 'route/PublicRoute';
import PrivateRoute from 'route/PrivateRoute';
import AppBar from 'components/AppBar';
import Loader from 'react-loader-spinner';
import s from 'App.module.css';

const HomeView = lazy(() =>
  import('views/HomeView' /*webpackChunkName: "home-page" */),
);
const RegisterView = lazy(() =>
  import('views/RegisterView' /*webpackChunkName: "register-page" */),
);
const LoginView = lazy(() =>
  import('views/LoginView' /*webpackChunkName: "login-page" */),
);
const PhonebookView = lazy(() =>
  import('views/PhonebookView' /*webpackChunkName: "phonebook-page" */),
);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, []);

  return (
    <>
      <AppBar />
      <Suspense
        fallback={
          <div className="LoaderContainer">
            <Loader type="TailSpin" color="#00BFFF" height={40} width={40} />
          </div>
        }
      >
        <Switch>
          <PublicRoute exact path="/">
            <HomeView />
          </PublicRoute>
          <PublicRoute path="/register" restricted>
            <RegisterView />
          </PublicRoute>
          <PublicRoute redirectTo="/contacts" path="/login" restricted>
            <LoginView />
          </PublicRoute>
          <PrivateRoute redirectTo="/login" path="/contacts">
            <PhonebookView />
          </PrivateRoute>
          <Route>
            <HomeView />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
