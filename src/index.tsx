import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';

import App from './App';
import reportWebVitals from './reportWebVitals';
import 'reset-css';
import './index.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const queryClient = new QueryClient();

const rootEl = document.getElementById('root');

const root = rootEl && ReactDOM.createRoot(rootEl)

root?.render(
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </RecoilRoot>
    </QueryClientProvider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
