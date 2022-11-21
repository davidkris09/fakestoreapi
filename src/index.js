import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {store, persistor} from './app/store'
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react';
import {CookiesProvider} from 'react-cookie'
import App from './App';
import 'semantic-ui-css/semantic.min.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <CookiesProvider>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App/>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </CookiesProvider>
);