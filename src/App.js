import { useEffect, lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { authOperations } from './redux/auth';
import AppBar from 'components/AppBar';
import HomeView from 'views/HomeView';
import RegisterView from 'views/RegisterView';
import LoginView from 'views/LoginView';
import PhonebookView from 'views/PhonebookView';
import Loader from 'react-loader-spinner';
import s from 'App.module.css';

// const HomeView = lazy(() =>
//   import('views/HomeView' /*webpackChunkName: "home-page" */),
// );
// const RegisterView = lazy(() =>
//   import('views/RegisterView' /*webpackChunkName: "register-page" */),
// );
// const LoginView = lazy(() =>
//   import('views/LoginView' /*webpackChunkName: "login-page" */),
// );
// const PhonebookView = lazy(() =>
//   import('views/PhonebookView' /*webpackChunkName: "phonebook-page" */),
// );

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, []);

  return (
    <>
      <AppBar />
      {/* <Suspense
        fallback={
          <div className="LoaderContainer">
            <Loader type="TailSpin" color="#00BFFF" height={40} width={40} />
          </div>
        }
      > */}
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route path="/register" component={RegisterView} />
        <Route path="/login" component={LoginView} />
        <Route path="/contacts" component={PhonebookView} />
        <Route component={HomeView} />
      </Switch>
      {/* </Suspense> */}
    </>
  );
}

export default App;
