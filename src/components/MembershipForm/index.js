// MembershipForm Component

// local imports
import './membership-form.scss';

const MembershipForm = () => (
  <div className="form">
    <div className="close-form">
      X
    </div>
    <h1 className="form__title">Formulaire d'adhésion à l'AMAP</h1>

    <form action="">

      <div className="infos">
        <h3 className="infos__title">Informations Personnelles</h3>
        <div className="form-underline" />
        <div className="infos__inputs">
          <input className="membership-input" type="text" placeholder="Prénom" name="firstName" required />
          <input className="membership-input" type="text" placeholder="Nom" name="lastName" required />
          <input className="membership-input" type="text" placeholder="Adresse" name="address" required />
          <input className="membership-input" type="text" placeholder="Code Postal" name="zipCode" required />
          <input className="membership-input" type="text" placeholder="Ville" name="city" required />
        </div>
      </div>

      <div className="form-contact">
        <h3>Contact</h3>
        <div className="form-underline" />
        <input type="tel" placeholder="Numéro de téléphone" name="phone" pattern="[0-9]{10}" maxLength={10} required />
        <input type="email" placeholder="Adresse email" name="email" required />
        <fieldset>
          <legend>J'accepte de partager, avec les autres adhérents :</legend>
          <label htmlFor="phoneSharing">
            <input type="checkbox" id="phoneSharing" name="phoneSharing" value={1} />
            Mon numéro de téléphone
          </label>
          <label htmlFor="emailSharing">
            <input type="checkbox" id="emailSharing" name="emailSharing" value={1} />
            Mon adresse mail
          </label>
        </fieldset>
      </div>

      <div className="form-basket">
        <h3>Option Panier</h3>
        <div className="form-underline" />
        <div className="add-basket">+ Panier</div>
        <h4>Taille</h4>
        <label htmlFor="basketType">
          <input type="radio" name="basketType" id="basketType" value={2} checked />
          Panier
        </label>
        <label htmlFor="basketType">
          <input type="radio" name="basketType" id="basketType" value={1} />
          Demi-Panier
        </label>
        <h4>Durée de la formule</h4>
        <label htmlFor="duration">
          <input type="radio" name="duration" id="duration" value={1} checked />
          1 mois (soit 4 paniers)
        </label>
        <label htmlFor="duration">
          <input type="radio" name="duration" id="duration" value={5} />
          5 mois (soit 20 paniers)
        </label>
        <label htmlFor="duration">
          <input type="radio" name="duration" id="duration" value={10} />
          10 mois (soit 40 paniers)
        </label>
        <p>Montant de la formule panier : ...€</p>
      </div>

      <div className="payment">
        <h3>Réglement</h3>
        <div>
          <label htmlFor="paymentType">
            <input type="radio" name="paymentType" id="paymentType" value={0} checked />
            Chèque
          </label>
          <label htmlFor="paymentType">
            <input type="radio" name="paymentType" id="paymentType" value={1} />
            Espèce
          </label>
        </div>
        <div>
          <label htmlFor="choice">
            <input type="radio" name="choice" id="choice" value={0} checked />
            Total
          </label>
          <label htmlFor="choice">
            <input type="radio" name="choice" id="choice" value={1} />
            Mensuel
          </label>
          <div>
            <label htmlFor="choice">
              <input type="radio" name="choice" id="choice" value={2} />
              Personnalisé
            </label>
            <label htmlFor="nberCheck">
              Nombre de chèques
              <input type="text" name="nberCheck" id="nberCheck" />
            </label>
            <label htmlFor="amount">
              Montant
              <input type="text" name="amount" id="amount" />
            </label>
            <label htmlFor="donation">
              Don (optionnel)
              <input type="number" name="donation" id="donation" />
            </label>
          </div>
        </div>
      </div>

      <div className="password">
        <label htmlFor="password">
          Choisissez votre mot de passe
          <input type="password" name="password" id="password" required />
        </label>
        <label htmlFor="password">
          Vérifiez votre mot de passe
          <input type="password" id="password" required />
        </label>
      </div>

      <div className="summary">
        <p>Adhésion : 10€</p>
        <p>Formule Panier : ...€</p>
        <p>Don : ...€</p>
        <h2>Prix total : ...€</h2>
      </div>

      <button type="submit">
        Valider mon adhésion
      </button>

    </form>

  </div>
);

export default MembershipForm;
