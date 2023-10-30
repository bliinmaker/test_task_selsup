import React from 'react'
import './index.css'
import { createRoot } from 'react-dom/client';
import App from './App';

const root = document.getElementById('root') as HTMLElement;
createRoot(root).render(<App />);
