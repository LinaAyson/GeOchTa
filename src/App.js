import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from "./components/LandingPage";
import LogIn from "./components/LogIn";
import Select from "./components/Select";
import Confirm from "./components/Confirm";
import OrderApproved from "./components/OrderApproved";
import Welcome from "./components/Welcome";
import pic from "./assets/test2.jpg";
import Info from './components/Info';

function App() {
  return (
    <div className="flex App">
      <div className="absolute top-0 flex w-full h-full" >
        <img alt="" src={pic} id="bg" className="object-cover"></img></div>
      <div className="z-10 w-full h-full">
        <Router>
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route exact path="/LogIn" element={<LogIn />} />
            <Route exact path="/Welcome" element={<Welcome />} />
            <Route exact path="/Select" element={<Select />} />
            <Route exact path="/Confirm" element={<Confirm />} />
            <Route exact path="/OrderApproved" element={<OrderApproved />} />
            <Route exact path="/Info" element={<Info />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;