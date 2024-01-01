// import logo from './logo.svg';
import "./App.css";
import Home from "./pages/home/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Dashboard from "./pages/dashboard/Dashboard";
import CreateORder from "./pages/createOrder/CreateORder";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
          <Route path="/create-parcel" element={<CreateORder/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
