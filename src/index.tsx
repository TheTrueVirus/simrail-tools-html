import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import SimRailTrackOverview from './applications/srto/srto';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
          <BrowserRouter>
            <Routes>
              <Route path='*' element={<Navigate to='/projects/srto' replace />} />
              <Route path='/projects/srto' element={<SimRailTrackOverview />} />
            </Routes>
          </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
