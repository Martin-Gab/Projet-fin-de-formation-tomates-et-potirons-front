// Member Profil Page Component

// Local Imports
import './member-profil.scss';

// Packages Imports
import { useSelector } from 'react-redux';

const MemberProfil = () => {
  const user = useSelector((state) => state.user.user);

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
            Mot de passe : <input type="password" value={user.password} className="profil__password" readOnly />
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
