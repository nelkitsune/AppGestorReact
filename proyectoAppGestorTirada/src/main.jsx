
import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './App'
import store from './app/store'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
  );
}

