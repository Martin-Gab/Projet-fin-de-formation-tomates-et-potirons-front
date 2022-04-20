// Component for "Notre Agriculture" page

// Local Imports
import './notre-agriculture.scss';
import pictureAgriculture from 'src/assets/images/notre-agriculture.jpeg';

// Packages Imports
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// Actions Imports
import { closeBurgerMenu, closeSubMenu } from 'src/actions/menu';

const NotreAgriculture = () => {
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
      <div className="notre-agriculture-wrapper">

        <img src={pictureAgriculture} alt="légumes récoltéeschez tomates et potirons" className="notre-agriculture-picture" />

        <div className="notre-agriculture-content">
          <h1 className="notre-agriculture-content__title">Notre Agriculture</h1>
          <p className="notre-agriculture-content__text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Molestias quia quos quaerat velit enim dicta doloribus neque
            sequi aspernatur ipsam provident consequuntur maxime,
            consectetur architecto natus id ipsa magni dolorum. <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Molestias quia quos quaerat velit enim dicta doloribus neque
            sequi aspernatur ipsam provident consequuntur maxime,
            consectetur architecto natus id ipsa magni dolorum. <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Molestias quia quos quaerat velit enim dicta doloribus neque
            sequi aspernatur ipsam provident consequuntur maxime,
            consectetur architecto natus id ipsa magni dolorum. <br />
          </p>
        </div>

      </div>
    </main>
  );
};

export default NotreAgriculture;
