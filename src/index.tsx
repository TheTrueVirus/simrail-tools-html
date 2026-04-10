import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Main from './main-page/main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CustomErrorHandler from './functions/customErrorHandler/errorHandler';
import SimRailStreckenspiegel from './applications/simrail-ssp/simrail-ssp';
import SideBar from './main-page/sidebar/sidebar';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <div className='index'>
      <div className='index_routes'>
        <BrowserRouter>
          <div className='index_main'>
            {/* <SideBar /> */}
          </div>
          <Routes>
            <Route path='' element={<SimRailStreckenspiegel />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  </React.StrictMode>
);
reportWebVitals();
