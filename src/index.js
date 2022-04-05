// == Npm imports
import { render } from 'react-dom';
import { Provider } from 'react-redux';

// == Local imports
// Composants
import App from 'src/components/App';
import store from 'src/store';

const rootReactElement = (
  <Provider store={store}>
    <App />
  </Provider>
);

const target = document.getElementById('root');

render(rootReactElement, target);
