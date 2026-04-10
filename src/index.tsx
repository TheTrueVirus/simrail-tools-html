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
    <div className='index_container'>
      {/* <CustomErrorHandler/> */}
      <div className='indexElement_routesContainer'>
        <BrowserRouter>
          <div className='indexElement_mainContainer'>
            <SideBar />
          </div>
          <Routes>
            <Route path='' element={<></>} />
            <Route path='/applications/simrail-ssp' element={<SimRailStreckenspiegel />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
