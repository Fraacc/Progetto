import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { BrowserRouter as Router} from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react';
import createStore from './redux/store';

const {store, persistor} = createStore

ReactDOM.render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
          <Router>
            <Fragment>
              <App />
            </Fragment>
          </Router>
          </PersistGate>
      </Provider>,
  document.getElementById('root')
);
