// == Local Imports
import './styles.scss';

// Components Imports
import Menu from 'src/components/Menu';
import Home from 'src/components/Home';
import Amap from 'src/components/Amap';
import Footer from 'src/components/Footer';
import MembershipForm from 'src/components/MembershipForm';
import LoginForm from 'src/components/LoginForm';

// Packages Imports
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

// == Composant
const App = () => {
  const isOpen = useSelector((state) => state.membership.isOpen);
  const isOpenLogin = useSelector((state) => state.login.isOpen);

  return (
    <div className="app">
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nos-activites/amap" element={<Amap />} />
      </Routes>
      <Footer />
      {isOpen && <MembershipForm />}
      {isOpenLogin && <LoginForm />}
    </div>
  );
};

// == Export
export default App;
