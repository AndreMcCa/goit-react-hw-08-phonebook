import React from 'react';
import { NavLink } from 'react-router-dom';

export default function AuthNav() {
  return (
    <div>
      <NavLink to="/register" exact>
        Регистрация
      </NavLink>
      <NavLink to="/login" exact>
        Войти
      </NavLink>
    </div>
  );
}
