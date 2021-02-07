import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';

import AppBar from './components/AppBar';
import ContactsView from './views/ContactsView';
import HomeView from './views/HomeView';
import LoginView from './views/LoginView';
import RegisterView from './views/RegisterView';
import PrivatRoute from "./components/PrivatRoute";
import PublicRoute from "./components/PublicRoute";

import { authOperations, authSelectors } from './redux/auth';

export default function App() {
const dispatch = useDispatch();
const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(
    () => {
      dispatch(authOperations.fetchCurrentUser());
    }, [dispatch]
  );

  return (
    !isFetchingCurrentUser && (
      <>
      <AppBar />
       
        <Switch>
           
          <PublicRoute exact path="/">
            <HomeView />
          </PublicRoute>

          <PublicRoute exact path="/register" restricted>
            <RegisterView />
          </PublicRoute>

          <PublicRoute exact path="/login" restricted>
            <LoginView />
          </PublicRoute>

          <PrivatRoute >
            <ContactsView path="/contacts" />
          </PrivatRoute>

        </Switch>
</>
    )
  );
}