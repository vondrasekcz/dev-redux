import { Provider as StoreProvider, } from 'react-redux';
import { BrowserRouter } from "react-router-dom";

import MainModule from './modules/MainModule';
import { store, } from './redux/store';


// https://redux-toolkit.js.org/usage/usage-guide
// https://www.youtube.com/watch?v=9zySeP5vH9c
const App = () => (
  <StoreProvider store={store}>
    <BrowserRouter>
      <MainModule />
    </BrowserRouter>
  </StoreProvider>
);


export default App
