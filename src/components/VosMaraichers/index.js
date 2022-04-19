// Component for "Vos Maraichers" page

// Local Imports
import './vos-maraichers.scss';
import pictureFrancois from 'src/assets/images/photo-francois.jpeg';
import pictureThomas from 'src/assets/images/photo-thomas.jpeg';

// Packages Imports
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// Actions Imports
import { closeBurgerMenu, closeSubMenu } from 'src/actions/menu';

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

        <img src={pictureFrancois} alt="François, un des maraichers" className="vos-maraichers-picture vos-maraichers-picture--first" />

        <div className="vos-maraichers-content vos-maraichers-content--first">
          <h1 className="vos-maraichers-content__name">François</h1>
          <p className="vos-maraichers-content__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Autem beatae id mollitia repellendus asperiores perspiciatis
            labore commodi quasi non similique nesciunt, repellat eligendi,
            in tempora fugit molestiae? Odit, fugit vitae?
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Autem beatae id mollitia repellendus asperiores perspiciatis
            labore commodi quasi non similique nesciunt, repellat eligendi,
            in tempora fugit molestiae? Odit, fugit vitae?
          </p>
        </div>

        <img src={pictureThomas} alt="Thomas, un des maraichers" className="vos-maraichers-picture vos-maraichers-picture--second" />

        <div className="vos-maraichers-content vos-maraichers-content--second">
          <h1 className="vos-maraichers-content__name">Thomas</h1>
          <p className="vos-maraichers-content__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Autem beatae id mollitia repellendus asperiores perspiciatis
            labore commodi quasi non similique nesciunt, repellat eligendi,
            in tempora fugit molestiae? Odit, fugit vitae?
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Autem beatae id mollitia repellendus asperiores perspiciatis
            labore commodi quasi non similique nesciunt, repellat eligendi,
            in tempora fugit molestiae? Odit, fugit vitae?
          </p>
        </div>

      </div>
    </main>
  );
};

export default VosMaraichers;
