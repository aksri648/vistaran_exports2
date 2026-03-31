import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';  // Make sure this import exists
import App from './App';
import './index.css';

const isGithubIoHost = /\.github\.io$/i.test(window.location.hostname);
const basename = isGithubIoHost ? '/vistaran_exports2' : '/';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);