import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { NotionKanban } from './NotionKanban';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NotionKanban />
  </React.StrictMode>
);