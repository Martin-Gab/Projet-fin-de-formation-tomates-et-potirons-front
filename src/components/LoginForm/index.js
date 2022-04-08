// LoginForm Component

// Local Imports
import './login-form.scss';

// Packages Imports
import { X } from 'react-feather';
import { NavLink } from 'react-router-dom';

const LoginForm = () => (
  <div className="login-modal">
    <form action="" method="post" className="login-form">
      <div className="login-form__close">
        <X />
      </div>
      <h1 className="login-form__title">Connexion</h1>
      <input
        type="text"
        className="login-form__input"
        required
        placeholder="Votre adresse mail"
      />
      <input
        type="password"
        className="login-form__input"
        required
        placeholder="Votre mot de passe"
      />
      <p className="login-form__membership">Pas encore adhérent, <NavLink to="/nos-activites/amap" className="login-form__link">c'est par ici !</NavLink></p>
      <button type="submit" className="login-form__btn">Se connecter</button>
    </form>
  </div>
);

export default LoginForm;
