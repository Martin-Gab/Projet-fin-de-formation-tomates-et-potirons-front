// Amap page Component

// Local Imports
import './amap.scss';
import { openForm } from 'src/actions/membership';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const Amap = () => {
  const dispatch = useDispatch();

  useEffect(
    () => {
      window.scrollTo(0, 0);
    },
    [],
  );

  return (
    <main>
      <section className="amap-page">
        <h1 className="amap-page__title">Notre Amap</h1>
        <div
          className="amap-page__cta"
          onClick={() => {
            dispatch(openForm());
          }}
        >
          Adhérer à l'AMAP
        </div>
      </section>
    </main>
  );
};

export default Amap;
