import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// var title = React.createElement('h1', { className: 'greeting' }, 'Welcome to Click Counter 3000!');
// ReactDOM.render(title, document.getElementById('root'));
// root.render(
//   <Button />
// )

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();