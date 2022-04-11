// MemberDashboard Component

// Local Imports
import './member-dashboard.scss';
import data from 'src/data/userData';

// Packages Imports
import { ShoppingBag, ChevronDown } from 'react-feather';

const MemberDashboard = () => (
  <div className="dashboard">
    <h1 className="welcome">Bienvenue {data.firstName} </h1>
    <div className="dashboard-card">
      <div className="dashboard-dropdown">
        <ShoppingBag size={16} />
        <h2>Mon adhésion AMAP</h2>
        <ChevronDown size={16} />
      </div>
      <div className="contract">
        <div className="contract__item">En attente de validation <div className="status-icon status-icon--orange" /></div>
        <div className="contract__item">Mode de réglement : Chèques</div>
        <div className="contract__item">Modalité de paiement : Total</div>
        <div className="contract__item">Option Panier : Oui</div>
        <div className="contract__item">Type de Panier : Plein</div>
        <div className="contract__item">Durée option Panier : 5 mois</div>
        <div className="contract__item">Fin de l'option : 24/04/23</div>
        <div className="contract__item">Don : 50€</div>
      </div>
    </div>
  </div>
);

export default MemberDashboard;
