import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';



// let topLevelComponentWithStore = (
//     <Provider store={store}>
//         <HashRouter>
//             <App />
//          </HashRouter>
//      </Provider>
// )

// ReactDOM.render(topLevelComponentWithStore, document.getElementById('root'));
// registerServiceWorker();


ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>    
, document.getElementById('root'));
registerServiceWorker();
