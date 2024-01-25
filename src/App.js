// import logo from './logo.svg';
import "./App.css";
import Home from "./pages/home/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Signup from "./pages/signup/Signup";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Offers from './pages/Offers/Offers.jsx'
import CreateORder from "./pages/createOrder/CreateORder";
import Update from "./pages/dashboard/Update";
import Parcels from "./pages/all parcels/Parcels.jsx";
import Service from "./pages/services/Service.jsx";
import User from "./pages/User/User.jsx";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/welcome" element={<Update/>}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/all-parcels" element={<Parcels/>}></Route>
          <Route path="/create-parcel" element={<CreateORder/>}></Route>
          <Route path="/service" element={<Service/>}></Route>
          <Route path="/offers" element={<Offers/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
