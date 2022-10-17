import React from 'react'
import ReactDOM from 'react-dom/client'
import '@fortawesome/fontawesome-free/js/all.js'
import './index.css'
import App from './app'

import store from "./redux/config/configStore"
import { Provider } from "react-redux"

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
