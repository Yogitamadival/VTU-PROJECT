import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomeScreen from './Screens/HomeScreen';
import AboutUs from './Screens/AboutUs';
import Admission from './Screens/Admission'
import CircularNotification from './Screens/CircularNotification'
import CertificateIssused from './Screens/CertificateIssused'
import ExaminationGuidlines from './Screens/ExaminationGuidlines'
import ExaminationApplication from './Screens/ExaminationApplication'
import Result from './Screens/Result'
// import ComputerScienceEngg  from './Screens/ComputerScienceEngg '
// import CivilEngg  from './Screens/CivilEngg '
// import ElectronicsCommunicationEngg  from './Screens/ElectronicsCommunicationEngg '
// import LoginAsAdmin from './Screens/LoginAsAdmin '

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index = {HomeScreen} path='/' element={<HomeScreen />}/>
      <Route path='/about' element={<AboutUs />}/>
      <Route path='/admission' element={<Admission />}/>
      <Route path='/Circular' element={<CircularNotification />}/>
      <Route path='/Certificate' element={<CertificateIssused />}/>
      <Route path='/Guidlines' element={<ExaminationGuidlines />}/>
      <Route path='/Application' element={<ExaminationApplication />}/>
      <Route path='/results' element={<Result />}/>
      {/* <Route path='/computerscience' element={<ComputerScienceEngg />}/>
      <Route path='/Civil Engg' element={<CivilEngg />}/>
      <Route path='/Electronics' element={<ElectronicsCommunicationEngg />}/> */}
      {/* <Route path='/login' element={<LoginAsAdmin />}/> */}
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider  router = {router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
