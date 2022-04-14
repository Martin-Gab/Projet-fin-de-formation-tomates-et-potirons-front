// == Local Imports
import './styles.scss';

// Packages Imports
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';

// Components Imports
import Menu from 'src/components/Menu';
import Home from 'src/components/Home';
import Amap from 'src/components/Amap';
import Footer from 'src/components/Footer';
import MembershipForm from 'src/components/MembershipForm';
import LoginForm from 'src/components/LoginForm';
import MemberDashboard from 'src/components/MemberDashboard';
import MemberProfil from 'src/components/MemberProfil';
import NotFound from 'src/components/NotFound';

// Actions Imports
import { logged } from 'src/actions/user';

// == Composant
const App = () => {
  const dispatch = useDispatch();

  const isOpen = useSelector((state) => state.membership.isOpen);
  const isOpenLogin = useSelector((state) => state.login.isOpen);
  const isConnected = useSelector((state) => state.user.isConnected);

  useEffect(
    () => {
      // if token present in localStorage a user is connected
      if (localStorage.getItem('token') !== null) {
        dispatch(logged());
      }
    },
  );

  return (
    <div className="app">
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nos-activites/amap" element={<Amap />} />
        {isConnected && (
          <>
            <Route path="/mon-espace/tableau-de-bord" element={<MemberDashboard />} />
            <Route path="/mon-espace/profil" element={<MemberProfil />} />
          </>
        )}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      {isOpen && <MembershipForm />}
      {isOpenLogin && <LoginForm />}
    </div>
  );
};

// == Export
export default App;
