import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import SimRailStreckenspiegel from './applications/simrail-ssp/simrail-ssp';
import './index.css';
// import CustomErrorHandler from './functions/customErrorHandler/errorHandler';
// import Main from './main-page/main';
// import SideBar from './main-page/sidebar/sidebar';
// import { AppProviders } from './functions/appcontext/appcontext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <div className='index'>
        <div className='index_routes'>
          <BrowserRouter basename='/simrail-tools-html'>
            <div className='index_main'>
              {/* <SideBar /> */}
            </div>
            <Routes>
              <Route path='/' element={<SimRailStreckenspiegel />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
  </React.StrictMode>
);
reportWebVitals();
