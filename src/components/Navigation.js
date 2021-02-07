import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import authSelectors from '../redux/auth/auth-selectors';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
return ( 
<nav>
  <NavLink to="/" exact>
      Главная страница
  </NavLink>

  {isLoggedIn && (
    <NavLink to="/contacts" exact>
      Контакты
    </NavLink>)}
</nav>)
};

export default Navigation;
