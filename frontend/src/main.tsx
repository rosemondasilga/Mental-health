import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App.tsx';
import './index.css';

// Replace `createRoot` with `ReactDOM.render`
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')!
);
