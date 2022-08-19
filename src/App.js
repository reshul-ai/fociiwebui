import logo from './logo.svg';
import './App.css';
import Home from './pages/home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './pages/profile/Profile';
import Payment from './pages/payment/Payment';

function App() {



  return (
    <div className="App">
         <Router>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/payment" element={<Payment />} />
        </Routes>
         </Router>

    </div>
  );
}

export default App;
 