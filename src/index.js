import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {aapStore} from "./utils/aapStore"
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Provider store={aapStore}>
    <App />
  </Provider>,
 
);


