import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes/routes";
import './App.css';
import ShowFilter from "./components/Header/Filter/ShowFilter";
import Spinner from "./components/Spinner/Spinner";

function App() {
  return (
    <div>
      <Spinner />
      <BrowserRouter>
        <ShowFilter />
        <Routes>
          {routes.map((route, index) => (
            <Route path={route.url} element={route.component} key={index} />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
