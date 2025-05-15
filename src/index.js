

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

<head>
<meta name="description" content="Little Lemon Restaurant reservation system"/>
<meta name="og:title" content="Little Lemon Restaurant "/>
<meta name="og:description" content="Little Lemon Restaurant  with a focus on the reservation system"/>
<meta name="og:image" content="./Assets/Logo.svg"/>
<meta name='viewport' content='width=device-width, initial-scale=1'/>
<script src="https://raw.githubusercontent.com/courseraap/capstone/main/api.js"></script>
</head>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
