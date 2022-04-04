import { useSelector, useDispatch } from 'react-redux';
import { changeInput } from 'src/actions/membership';

const BasketOption = () => {
  const dispatch = useDispatch();

  const basketFull = useSelector((state) => state.membership.basketFull);
  const basketHalf = useSelector((state) => state.membership.basketHalf);
  const oneMonthChecked = useSelector((state) => state.membership.oneMonthChecked);
  const fiveMonthChecked = useSelector((state) => state.membership.fiveMonthChecked);
  const tenMonthChecked = useSelector((state) => state.membership.tenMonthChecked);

  return (
    <>
      <div className="basket__size">
        <h4 className="section-subtitle">Taille</h4>
        <label htmlFor="basketTypeFull">
          <input
            type="radio"
            name="basketType"
            id="basketTypeFull"
            checked={basketFull}
            onChange={() => {
              dispatch(changeInput(2, 'basketType'));
            }}
          />
          Panier
        </label>
        <label htmlFor="basketTypeHalf">
          <input
            type="radio"
            name="basketType"
            id="basketTypeHalf"
            checked={basketHalf}
            onChange={() => {
              dispatch(changeInput(1, 'basketType'));
            }}
          />
          Demi-Panier
        </label>
      </div>

      <div className="basket__duration">
        <h4 className="section-subtitle">Durée de la formule</h4>
        <label htmlFor="duration1">
          <input
            type="radio"
            name="duration"
            id="duration1"
            checked={oneMonthChecked}
            onChange={() => {
              dispatch(changeInput(1, 'oneMonth'));
            }}
          />
          1 mois (soit 4 paniers)
        </label>
        <label htmlFor="duration5">
          <input
            type="radio"
            name="duration"
            id="duration5"
            checked={fiveMonthChecked}
            onChange={() => {
              dispatch(changeInput(5, 'fiveMonth'));
            }}
          />
          5 mois (soit 20 paniers)
        </label>
        <label htmlFor="duration10">
          <input
            type="radio"
            name="duration"
            id="duration10"
            checked={tenMonthChecked}
            onChange={() => {
              dispatch(changeInput(10, 'tenMonth'));
            }}
          />
          10 mois (soit 40 paniers)
        </label>
      </div>

      <p className="basket__amount">Montant de la formule panier : 50 €</p>
    </>
  );
};

export default BasketOption;
