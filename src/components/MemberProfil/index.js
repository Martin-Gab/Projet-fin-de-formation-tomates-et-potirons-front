// Member Profil Page Component

// Local Imports
import './member-profil.scss';
import { closeBurgerMenu } from 'src/actions/menu';

// Packages Imports
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const MemberProfil = () => {
  const dispatch = useDispatch();

  // Infos concerning the connected user, stored in the localStorage and retrieved from API
  const user = JSON.parse(localStorage.getItem('userInfos'));

  useEffect(
    () => {
      window.scrollTo(0, 0);
      dispatch(closeBurgerMenu());
    },
    [],
  );

  return (
    <main>
      <div className="profil-wrapper">
        <div className="profil">
          <h1 className="profil__title">Mon Profil</h1>
          <div className="profil__underline" />
          <div className="profil__item">Prénom : {user.firstName}</div>
          <div className="profil__item">Nom : {user.lastName}</div>
          <div className="profil__item">Adresse : {user.address}, {user.zipCode} {user.city}</div>
          <div className="profil__item">Adresse email : {user.email}</div>
          <div className="profil__item">Numéro de téléphone : {user.phone}</div>
          <div className="profil__item">
            Mot de passe : <input type="password" value="nothing" className="profil__password" readOnly />
          </div>
          <div className="cta-wrapper">
            <div className="profil__cta">Modifier mon Profil</div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MemberProfil;
