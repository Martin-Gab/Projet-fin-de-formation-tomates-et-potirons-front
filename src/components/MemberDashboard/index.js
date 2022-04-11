// MemberDashboard Component

// Local Imports
import './member-dashboard.scss';
import { toggleContract, toggleMembersList, toggleCalendar } from 'src/actions/user';

// Packages Imports
import {
  ShoppingBag,
  ChevronDown,
  ChevronUp,
  Calendar,
  Users,
} from 'react-feather';
import { useSelector, useDispatch } from 'react-redux';

// TODO : Modifier le format de la date d'expiration du panier
// TODO (et surement de la date de fin d'adhésion)

const MemberDashboard = () => {
  const dispatch = useDispatch();

  const dropdownContract = useSelector((state) => state.user.dropdownContract);
  const dropdownMembersList = useSelector((state) => state.user.dropdownMembersList);
  const dropdownCalendar = useSelector((state) => state.user.dropdownCalendar);
  // Infos concerning the connected user, stored in the state and retrieved from API
  const user = useSelector((state) => state.user.user);

  // Changing CSS class for status div according to status
  // Changing message according to status
  let cssClassStatus = 'status-icon';
  let statusMessage;
  if (user.membershipStatus === 0) {
    cssClassStatus = 'status-icon status-icon--orange';
    statusMessage = 'En cours de validation';
  }
  else if (user.membershipStatus === 1) {
    cssClassStatus = 'status-icon status-icon--green';
    statusMessage = 'En cours';
  }
  else {
    cssClassStatus = 'status-icon status-icon--red';
    statusMessage = 'Expirée';
  }

  // Changing value according to payment choice
  let paymentModality;
  if (user.formule.choice === 0) {
    paymentModality = 'Total';
  }
  else if (user.formule.choice === 1) {
    paymentModality = 'Mensuel';
  }
  else {
    paymentModality = 'Personnalisé';
  }

  // Changing value according to basketType
  let basketType;
  if (user.formule.basketType === 0) {
    basketType = 'Pas de panier';
  }
  else if (user.formule.basketType === 1) {
    basketType = 'Demi-Panier';
  }
  else {
    basketType = 'Panier Complet';
  }

  return (
    <main>
      <div className="dashboard">
        <h1 className="welcome">Bienvenue {user.firstName} {user.lastName} </h1>

        <div className="card-wrapper">

          <div className="dashboard-card">
            <div
              className="dashboard-dropdown"
              onClick={() => {
                dispatch(toggleContract());
              }}
            >
              <ShoppingBag size={16} />
              <h2>Mon adhésion AMAP</h2>
              {dropdownContract ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </div>
            {dropdownContract && (
              <div className="contract">
                <div className="contract__item">{statusMessage} <div className={cssClassStatus} /></div>
                <div className="contract__item">Date de fin de l'adhésion : {user.expirationDate === null ? '-' : user.expirationDate}</div>
                <div className="contract__item">Mode de réglement : {user.paymentType === 0 ? 'Chèques' : 'Espèces'}</div>
                <div className="contract__item">Modalité de paiement : {paymentModality} {user.formule.choice === 2 ? `(${user.formule.nberCheck} x ${user.formule.amount}€)` : ''}</div>
                <div className="contract__item">Option Panier : {user.formule.basketType !== 0 ? 'Oui' : 'Non' }</div>
                <div className="contract__item">Type de Panier : {basketType}</div>
                <div className="contract__item">Durée option Panier : {user.formule.duration} mois</div>
                <div className="contract__item">Fin de l'option : {user.formule.expirationDate === null ? '-' : user.formule.expirationDate}</div>
                <div className="contract__item">Don : {user.donation === null || user.donation === 0 ? '-' : `${user.donation}€`}</div>
              </div>
            )}
          </div>

          <div className="dashboard-card">
            <div
              className="dashboard-dropdown"
              onClick={() => {
                dispatch(toggleMembersList());
              }}
            >
              <Users size={16} />
              <h2>Mes Amis Adhérents</h2>
              {dropdownMembersList ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </div>
            {dropdownMembersList && (
              <div className="contract">
                <div className="contract__item">Fonctionnalité à venir</div>
              </div>
            )}
          </div>

          <div className="dashboard-card">
            <div
              className="dashboard-dropdown"
              onClick={() => {
                dispatch(toggleCalendar());
              }}
            >
              <Calendar size={16} />
              <h2>Calendrier Référent panier</h2>
              {dropdownCalendar ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </div>
            {dropdownCalendar && (
              <div className="contract">
                <div className="contract__item">Fonctionnalité à venir</div>
              </div>
            )}
          </div>

        </div>

      </div>
    </main>
  );
};

export default MemberDashboard;
