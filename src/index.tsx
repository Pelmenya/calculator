import React from 'react';
import ReactDOM from 'react-dom/client';
import './static/fonts/stylesheet.css';

import { App } from './app';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './redux/store/store';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
);
root.render(
    <React.StrictMode>
        <ReduxProvider store={store}>
            <App />
        </ReduxProvider>
    </React.StrictMode>,
);

