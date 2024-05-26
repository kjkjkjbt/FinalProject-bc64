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
import "./App.css";
// import { Button } from 'antd';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthTemplate from "./Template/Autemplate";
import SigninPage from "./Component/pages/SigninPage/SigninPage";
import SignupPage from "./Component/pages/SignupPage/SignupPage";
import LoadingSlice from "./Component/redux/loadingReducer/loadingSlice";
import Loading from "./Component/Loading/Loading";
import ListingPage from "./Component/pages/ListingPage";
import { PageNotFOund } from "./Component/pages/PageNotFOund";
import { CheckInOut } from "./Component/CheckInOut/CheckInOut";

function App() {
  return (
    <BrowserRouter>
      {<LoadingSlice />}
      {<Loading />}

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
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/list123" element={<ListingPage />} />
          <Route path="*" element={<PageNotFOund />} />
          <Route path="/check-In-Out" element={<CheckInOut />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
