import React from 'react';
import ReactDOM from 'react-dom';

import 'weui';
import 'react-weui/build/packages/react-weui.css';


import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import api from './middleware/api'
import reducer from './reducers'

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const middleware = [ thunk, api ]

const store = createStore(
    reducer,
    applyMiddleware(...middleware)
)


ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
