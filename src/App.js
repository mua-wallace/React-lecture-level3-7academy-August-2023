import logo from "./logo.svg";
import "./App.css";
import FetchComponent from "./components/FetchComponent";
import AxiosComponent from "./components/AxiosComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Survey from "./components/Survey";
import UseParams from "./components/UseParams";
import ParamsComponent from "./components/ParamsComponent";

function App() {
  return (
    <BrowserRouter>
      <h1>Routing using react router dom</h1>
      <Routes>
        <Route path="/useparams" element={<UseParams />} />
        <Route path="/:word" element={<ParamsComponent />} />
        <Route path="/:word/:color/:bgColor" element={<ParamsComponent />} />
        <Route path="/about" element={<About />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/survey" element={<Survey />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
