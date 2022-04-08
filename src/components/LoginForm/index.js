// LoginForm Component

// Local Imports
import './login-form.scss';
import { inputChangeLogin } from 'src/actions/login';

// Packages Imports
import { X } from 'react-feather';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const LoginForm = () => {
  const dispatch = useDispatch();

  const email = useSelector((state) => state.login.email);
  const password = useSelector((state) => state.login.password);

  return (
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
          value={email}
          onChange={(evt) => {
            dispatch(inputChangeLogin(evt.target.value, 'email'));
          }}
        />
        <input
          type="password"
          className="login-form__input"
          required
          placeholder="Votre mot de passe"
          value={password}
          onChange={(evt) => {
            dispatch(inputChangeLogin(evt.target.value, 'password'));
          }}
        />
        <p className="login-form__membership">Pas encore adhérent, <NavLink to="/nos-activites/amap" className="login-form__link">c'est par ici !</NavLink></p>
        <button type="submit" className="login-form__btn">Se connecter</button>
      </form>
    </div>
  );
};

export default LoginForm;
