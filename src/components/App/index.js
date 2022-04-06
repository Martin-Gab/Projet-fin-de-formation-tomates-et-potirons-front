// == Local Import
import './styles.scss';

// Components Import
import Menu from 'src/components/Menu';
import Home from 'src/components/Home';
import Footer from 'src/components/Footer';
import MembershipForm from 'src/components/MembershipForm';

// Npm Import
import { useSelector } from 'react-redux';

// == Composant
const App = () => {
  const isOpen = useSelector((state) => state.membership.isOpen);

  return (
    <div className="app">
      <Menu />
      <Home />
      <Footer />
      {isOpen && <MembershipForm />}
    </div>
  );
};

// == Export
export default App;
