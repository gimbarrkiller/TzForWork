import React from 'react';
import { Provider } from 'react-redux'
import AddCounter from './Components/AddCounter/AddCounter';

import store from './store'
import Counters from './Components/Counters/Counters';

import './App.css';

const App = () => {
  return (
    <Provider store={store}>
    <AddCounter />
    <Counters />
    </Provider>
  );
}

export default App;
