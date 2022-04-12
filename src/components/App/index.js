// == Local Imports
import './styles.scss';

// Packages Imports
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

// Components Imports
import Menu from 'src/components/Menu';
import Home from 'src/components/Home';
import Amap from 'src/components/Amap';
import Footer from 'src/components/Footer';
import MembershipForm from 'src/components/MembershipForm';
import LoginForm from 'src/components/LoginForm';
import MemberDashboard from 'src/components/MemberDashboard';
import MemberProfil from 'src/components/MemberProfil';

// == Composant
const App = () => {
  const isOpen = useSelector((state) => state.membership.isOpen);
  const isOpenLogin = useSelector((state) => state.login.isOpen);
  const isConnected = useSelector((state) => state.user.isConnected);

  return (
    <div className="app">
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nos-activites/amap" element={<Amap />} />
        {isConnected && (localStorage.getItem('token') !== null) && (
          <>
            <Route path="/mon-espace/tableau-de-bord" element={<MemberDashboard />} />
            <Route path="/mon-espace/profil" element={<MemberProfil />} />
          </>
        )}
      </Routes>
      <Footer />
      {isOpen && <MembershipForm />}
      {isOpenLogin && <LoginForm />}
    </div>
  );
};

// == Export
export default App;
