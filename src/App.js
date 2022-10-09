import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from "./components/LandingPage";
import LogIn from "./components/LogIn";
import Select from "./components/Select";
import Confirm from "./components/Confirm";
import OrderApproved from "./components/OrderApproved";
import Welcome from "./components/Welcome";
import pic from "./assets/bkg.jpeg"





function App() {
  return (
    <div className="App flex">
      <div className="absolute w-full h-full top-0 z-0 flex"><img src={pic} className="object-cover"></img></div>
      <div className='z-10 h-full w-full'>
        <Router>
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route exact path="/LogIn" element={<LogIn />} />
            <Route exact path="/Welcome" element={<Welcome />} />
            <Route exact path="/Select" element={<Select />} />
            <Route exact path="/Confirm" element={<Confirm />} />
            <Route exact path="/OrderApproved" element={<OrderApproved />} />
          </Routes>
        </Router>
      </div>

    </div>

  );
}

export default App;