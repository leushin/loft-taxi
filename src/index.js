import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import RootRouter from './components/RootRouter';
import createAppStore from './store';

const store = createAppStore();

ReactDOM.render(
    <Provider store={store}>
        <RootRouter />
    </Provider>,
document.getElementById('root')
);