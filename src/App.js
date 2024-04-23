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

// import logo from './logo.svg';
import './App.css';
// import { Button } from 'antd';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthTemplate from './Template/Autemplate';
import SigninPage from './Component/pages/SigninPage/SigninPage';
import SignupPage from './Component/pages/SignupPage/SignupPage'





function App() {
  return (
    <BrowserRouter>
      {/* <Loading /> */}
      <Routes>
        {/* home template
        <Route path="" element={<HomeTemplate />}>
          <Route index element={<HomePage />} /> */}
          {/* <Route
            path="screen/:MaPhong"
            element={
              <CheckUser>
                <ScreenPage />
              </CheckUser>
            }
          />
        </Route> */}
        {/* auth template */}
        <Route path="/auth" element={<AuthTemplate />}>
          <Route path="signin" element={<SigninPage />} />
          <Route path='signup' element ={<SignupPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
