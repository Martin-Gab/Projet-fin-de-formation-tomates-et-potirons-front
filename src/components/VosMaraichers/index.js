// Component for "Vos Maraichers" page

// Local Imports
import './vos-maraichers.scss';

// Packages Imports
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// Actions Imports
import { closeBurgerMenu, closeSubMenu } from 'src/actions/menu';

// Data Import
import { contentVosMaraichers } from 'src/data/content';

const VosMaraichers = () => {
  const dispatch = useDispatch();

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
      <div className="vos-maraichers-wrapper">

        {contentVosMaraichers.map((item) => (
          <>
            <img src={item.picture} alt={`${item.name}, un des maraichers`} className={`vos-maraichers-picture vos-maraichers-picture--${item.position}`} />

            <div className={`vos-maraichers-content vos-maraichers-content--${item.position}`}>
              <h1 className="vos-maraichers-content__name">{item.name}</h1>
              <p className="vos-maraichers-content__description">
                {item.description}
              </p>
            </div>
          </>
        ))}

      </div>
    </main>
  );
};

export default VosMaraichers;
