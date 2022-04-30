import { Provider as StoreProvider, } from 'react-redux';
import BasicCounter from './components/BasicCounter';
import Dogs from './components/Dogs';

import { store, } from './redux/store';


// https://redux-toolkit.js.org/usage/usage-guide
// https://www.youtube.com/watch?v=9zySeP5vH9c&t=1s
const App = () => (
  <StoreProvider store={store}>
    <BasicCounter />
    <Dogs />
  </StoreProvider>
);


export default App
