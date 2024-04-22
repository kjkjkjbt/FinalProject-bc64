// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import logo from './logo.svg';
import './App.css';
import { Button } from 'antd';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthTemplate from './templates/AuthTemplate';
import LoginPage from './pages/loginPage/LoginPage';
import { useEffect } from 'react';
import { userSer } from './service/userSer';
import HomeTemplate from './templates/HomeTemplate';
import HomePage from './pages/HomePage/HomePage';
import DetailPage from './pages/DetailPage/DetailPage';
import ScreenPage from './pages/ScreenPage/ScreenPage';
import Loading from './components/Loading/Loading';
import CheckUser from './HOC/CheckUser';
import SignupPage from './pages/signupPage/SignupPage';

function App() {
  return (
    <BrowserRouter>
      <Loading />
      <Routes>
        {/* home template */}
        <Route path="" element={<HomeTemplate />}>
          <Route index element={<HomePage />} />
          <Route
            path="screen/:MaPhong"
            element={
              <CheckUser>
                <ScreenPage />
              </CheckUser>
            }
          />
        </Route>
        {/* auth template */}
        <Route path="/auth" element={<AuthTemplate />}>
          <Route path="signin" element={<LoginPage />} />
          <Route path='signup' element ={<SignupPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
