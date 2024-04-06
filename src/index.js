import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/app/app';
import './style.css';

const todoapp = ReactDOM.createRoot(document.getElementById('todoapp'));
todoapp.render(<App />);
