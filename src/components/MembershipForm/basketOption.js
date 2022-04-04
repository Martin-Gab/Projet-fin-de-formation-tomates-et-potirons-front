const BasketOption = () => (
  <>
    <div className="basket__size">
      <h4 className="section-subtitle">Taille</h4>
      <label htmlFor="basketType">
        <input type="radio" name="basketType" id="basketType" value={2} defaultChecked />
        Panier
      </label>
      <label htmlFor="basketType">
        <input type="radio" name="basketType" id="basketType" value={1} />
        Demi-Panier
      </label>
    </div>

    <div className="basket__duration">
      <h4 className="section-subtitle">Durée de la formule</h4>
      <label htmlFor="duration">
        <input type="radio" name="duration" id="duration" value={1} defaultChecked />
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
    </div>

    <p className="basket__amount">Montant de la formule panier : 50 €</p>
  </>
);

export default BasketOption;
