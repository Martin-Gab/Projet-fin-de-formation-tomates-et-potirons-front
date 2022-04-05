// == Local Import
import './styles.scss';

// Components Import
import MembershipForm from 'src/components/MembershipForm';

// Npm Import
import { useSelector } from 'react-redux';

// == Composant
const App = () => {
  const isOpen = useSelector((state) => state.membership.isOpen);

  return (
    <div className="app">
      {isOpen && <MembershipForm />}
    </div>
  );
};

// == Export
export default App;
