// Amap page Component

// Local Imports
import './amap.scss';
import { openForm } from 'src/actions/membership';
import { closeBurgerMenu, closeSubMenu } from 'src/actions/menu';
import { toggleSubmitSuccess } from 'src/actions/modals';

// Packages Imports
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { X } from 'react-feather';

// Data content Import
import { contentAmap } from 'src/data/content';

const Amap = () => {
  const dispatch = useDispatch();

  const submitSuccessModalOpen = useSelector((state) => state.modals.submitSuccessModal);

  useEffect(
    () => {
      window.scrollTo(0, 0);
      dispatch(closeBurgerMenu());
      dispatch(closeSubMenu());
    },
    [],
  );

  return (
    <main>

      <div className={submitSuccessModalOpen ? 'success-alert success-alert--active' : 'success-alert'}>
        <div className="success-alert__close" onClick={() => dispatch(toggleSubmitSuccess())}>
          <X size={20} />
        </div>
        Votre adhésion a bien été envoyée !<br />
        Elle sera validée d'ici 24-48h.
      </div>

      <section className="amap-page">

        <img src={contentAmap.img} alt="illustration de l'amap" className="amap-image" />

        <div className="amap-infos">
          <h1 className="amap-infos__title">{contentAmap.title}</h1>
          <p className="amap-infos__description">
            {contentAmap.description}
          </p>
          <div
            className="amap-infos__cta"
            onClick={() => {
              dispatch(openForm());
            }}
          >
            {contentAmap.cta}
          </div>
          <div className="modal-wrapper">
            <div className="amap-infos__modal">Charte AMAP</div>
            <div className="amap-infos__modal">Réglement Intérieur</div>
            <div className="amap-infos__modal">Contrat AMAP</div>
          </div>
        </div>

      </section>

    </main>
  );
};

export default Amap;
