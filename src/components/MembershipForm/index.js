// MembershipForm Component

// local imports
import './membership-form.scss';
import { useSelector, useDispatch } from 'react-redux';
import {
  changeInput,
  toggleBasketOption,
  closeForm,
  submitMembership,
} from 'src/actions/membership';

import BasketOption from './basketOption';

const MembershipForm = () => {
  const dispatch = useDispatch();

  const basketOption = useSelector((state) => state.membership.basketOption);

  const firstName = useSelector((state) => state.membership.firstName);
  const lastName = useSelector((state) => state.membership.lastName);
  const address = useSelector((state) => state.membership.address);
  const zipCode = useSelector((state) => state.membership.zipCode);
  const city = useSelector((state) => state.membership.city);
  const phone = useSelector((state) => state.membership.phone);
  const email = useSelector((state) => state.membership.email);
  const phoneSharing = useSelector((state) => state.membership.phoneSharing);
  const phoneSharingChecked = useSelector((state) => state.membership.phoneSharingChecked);
  const emailSharing = useSelector((state) => state.membership.emailSharing);
  const emailSharingChecked = useSelector((state) => state.membership.emailSharingChecked);
  const basketType = useSelector((state) => state.membership.basketType);
  const cashOption = useSelector((state) => state.membership.cashOption);
  const checkOption = useSelector((state) => state.membership.checkOption);
  const totalChecked = useSelector((state) => state.membership.totalChecked);
  const monthlyChecked = useSelector((state) => state.membership.monthlyChecked);
  const customChecked = useSelector((state) => state.membership.customChecked);
  const nberCheck = useSelector((state) => state.membership.nberCheck);
  const amount = useSelector((state) => state.membership.amount);
  const donation = useSelector((state) => state.membership.donation);
  const password = useSelector((state) => state.membership.password);
  const passwordVerification = useSelector((state) => state.membership.passwordVerification);

  return (
    <div className="form">
      <div
        className="close-form"
        onClick={() => {
          dispatch(closeForm());
        }}
      >
        X
      </div>
      <h1 className="form__title">Formulaire d'adhésion à l'AMAP</h1>

      <form
        action="POST"
        onSubmit={(evt) => {
          evt.preventDefault();
          dispatch(submitMembership());
        }}
      >

        <div className="form-wrapper">

          <div className="infos">
            <h3 className="section-title">Informations Personnelles</h3>
            <div className="form-underline" />
            <div className="infos__inputs">
              <input
                className="membership-input"
                type="text"
                placeholder="Prénom"
                name="firstName"
                value={firstName}
                onChange={(evt) => {
                  dispatch(changeInput(evt.target.value, 'firstName'));
                }}
                required
              />
              <input
                className="membership-input"
                type="text"
                placeholder="Nom"
                name="lastName"
                value={lastName}
                onChange={(evt) => {
                  dispatch(changeInput(evt.target.value, 'lastName'));
                }}
                required
              />
              <input
                className="membership-input"
                type="text"
                placeholder="Adresse"
                name="address"
                value={address}
                onChange={(evt) => {
                  dispatch(changeInput(evt.target.value, 'address'));
                }}
                required
              />
              <input
                className="membership-input"
                type="text"
                placeholder="Code Postal"
                name="zipCode"
                value={zipCode}
                onChange={(evt) => {
                  dispatch(changeInput(evt.target.value, 'zipCode'));
                }}
                required
              />
              <input
                className="membership-input"
                type="text"
                placeholder="Ville"
                name="city"
                value={city}
                onChange={(evt) => {
                  dispatch(changeInput(evt.target.value, 'city'));
                }}
                required
              />
            </div>
          </div>

          <div className="contact">
            <h3 className="section-title">Contact</h3>
            <div className="form-underline" />
            <input
              className="membership-input"
              type="tel"
              placeholder="Numéro de téléphone"
              name="phone"
              pattern="[0-9]{10}"
              maxLength={10}
              value={phone}
              onChange={(evt) => {
                dispatch(changeInput(evt.target.value, 'phone'));
              }}
              required
            />
            <input
              className="membership-input"
              type="email"
              placeholder="Adresse email"
              name="email"
              value={email}
              onChange={(evt) => {
                dispatch(changeInput(evt.target.value, 'email'));
              }}
              required
            />
            <fieldset>
              <legend>J'accepte de partager, avec les autres adhérents :</legend>
              <div className="contact__checkbox">
                <label htmlFor="phoneSharing">
                  <input
                    type="checkbox"
                    id="phoneSharing"
                    name="phoneSharing"
                    checked={phoneSharingChecked}
                    value={phoneSharing}
                    onChange={(evt) => {
                      if (evt.target.value === '0') {
                        dispatch(changeInput(1, 'phoneSharing'));
                      }
                      else {
                        dispatch(changeInput(0, 'phoneSharing'));
                      }
                    }}
                  />
                  Mon numéro de téléphone
                </label>
                <label htmlFor="emailSharing">
                  <input
                    type="checkbox"
                    id="emailSharing"
                    name="emailSharing"
                    value={emailSharing}
                    checked={emailSharingChecked}
                    onChange={(evt) => {
                      if (evt.target.value === '0') {
                        dispatch(changeInput(1, 'emailSharing'));
                      }
                      else {
                        dispatch(changeInput(0, 'emailSharing'));
                      }
                    }}
                  />
                  Mon adresse mail
                </label>
              </div>
            </fieldset>
          </div>

          <div className="basket">
            <h3 className="section-title">Option Panier</h3>
            <div className="form-underline" />
            <div
              className="basket__add"
              onClick={() => {
                if (basketType === 1 || basketType === 2) {
                  dispatch(toggleBasketOption('off'));
                }
                else {
                  dispatch(toggleBasketOption('on'));
                }
              }}
            >
              + Panier
            </div>
            {basketOption && <BasketOption />}
          </div>

          <div className="payment">
            <h3 className="section-title">Réglement</h3>
            <div className="form-underline" />
            <div className="payment__type">
              <label htmlFor="paymentTypeCash">
                <input
                  type="radio"
                  name="paymentType"
                  id="paymentTypeCash"
                  checked={cashOption}
                  onChange={() => {
                    dispatch(changeInput(1, 'payment'));
                  }}
                />
                Espèce
              </label>
              <label htmlFor="paymentTypeCheck">
                <input
                  type="radio"
                  name="paymentType"
                  id="paymentTypeCheck"
                  checked={checkOption}
                  onChange={() => {
                    dispatch(changeInput(0, 'payment'));
                  }}
                />
                Chéque
              </label>
            </div>
            <div className="payment__choice">
              {basketOption && (
                <>
                  <label htmlFor="choiceTotal">
                    <input
                      type="radio"
                      name="choice"
                      id="choiceTotal"
                      checked={totalChecked}
                      onChange={() => {
                        dispatch(changeInput(0, 'totalPayment'));
                      }}
                    />
                    Total
                  </label>
                  <label htmlFor="choiceMonthly">
                    <input
                      type="radio"
                      name="choice"
                      id="choiceMonthly"
                      checked={monthlyChecked}
                      onChange={() => {
                        dispatch(changeInput(1, 'monthlyPayment'));
                      }}
                    />
                    Mensuel
                  </label>
                </>
              )}
              {checkOption && basketOption && (
                <div className="payment__choice">
                  <label htmlFor="choiceCustom" className="choice-custom">
                    <input
                      type="radio"
                      name="choice"
                      id="choiceCustom"
                      checked={customChecked}
                      onChange={() => {
                        dispatch(changeInput(2, 'customPayment'));
                      }}
                    />
                    Personnalisé
                  </label>
                  {customChecked && (
                    <>
                      <input
                        type="number"
                        name="nberCheck"
                        id="nberCheck"
                        placeholder="Nombres de chéques"
                        className="membership-input"
                        value={nberCheck}
                        onChange={(evt) => {
                          dispatch(changeInput(evt.target.value, 'numberCheck'));
                        }}
                      />
                      <input
                        type="number"
                        name="amount"
                        id="amount"
                        placeholder="Montant (en euros)"
                        className="membership-input"
                        value={amount}
                        onChange={(evt) => {
                          dispatch(changeInput(evt.target.value, 'amount'));
                        }}
                      />
                    </>
                  )}
                </div>
              )}
            </div>
            <div className="payment__donation">
              <h4 className="section-subtitle">Don (optionnel)</h4>
              <input
                type="number"
                name="donation"
                id="donation"
                placeholder="En euros"
                className="membership-input"
                value={donation}
                onChange={(evt) => {
                  dispatch(changeInput(evt.target.value, 'donation'));
                }}
              />
            </div>
          </div>

          <div className="password">
            <h3 className="section-title">Authentification</h3>
            <div className="form-underline" />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Votre mot de passe"
              className="membership-input"
              required
              value={password}
              onChange={(evt) => {
                dispatch(changeInput(evt.target.value, 'password'));
              }}
            />
            <input
              type="password"
              id="passwordCheck"
              placeholder="Vérification mot de passe"
              className="membership-input"
              required
              value={passwordVerification}
              onChange={(evt) => {
                dispatch(changeInput(evt.target.value, 'passwordCheck'));
              }}
            />
          </div>

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
};

export default MembershipForm;
