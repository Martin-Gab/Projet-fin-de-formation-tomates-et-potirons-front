// == Local Imports
import './styles.scss';

// Components Imports
import Menu from 'src/components/Menu';
import Home from 'src/components/Home';
// import Amap from 'src/components/Amap';
import Footer from 'src/components/Footer';
import MembershipForm from 'src/components/MembershipForm';

// Packages Imports
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
// import { useEffect } from 'react';

// == Composant
const App = () => {
  const isOpen = useSelector((state) => state.membership.isOpen);

  // useEffect(
  //   () => {
  //     console.log('useEffect is launched');
  //   },
  // );

  return (
    <div className="app">
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/nos-activites/amap" element={<Amap />} /> */}
      </Routes>
      <Footer />
      {isOpen && <MembershipForm />}
    </div>
  );
};

// == Export
export default App;
