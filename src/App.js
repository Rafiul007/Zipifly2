// import logo from './logo.svg';
import "./App.css";
import Home from "./pages/home/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Signup from "./pages/signup/Signup";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

import CreateORder from "./pages/createOrder/CreateORder";
import Update from "./pages/dashboard/Update";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/welcome" element={<Update/>}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          {/* <Route path="/dashboard" element={<Dashboard/>}></Route> */}
          <Route path="/create-parcel" element={<CreateORder/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
