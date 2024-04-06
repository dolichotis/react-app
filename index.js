import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './src/components/app/app';
import './src/style.css';

const todoapp = ReactDOM.createRoot(document.getElementById('todoapp'));
todoapp.render(<App />);
