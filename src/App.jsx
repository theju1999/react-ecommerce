import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap's CSS file
import home from "./components/home";
import ADGB from "./components/adgp";
import aboutus from "./components/Aboutus";
import service from "./components/Services";
import contactus from "./components/Contactus";

export default function App() {
  return (
    <BrowserRouter>
         <Routes>
        <Route path="/"  Component={home}></Route>
        <Route path="/Aboutus" Component={aboutus}></Route>
        <Route path="/adgp" Component={ADGB}></Route>
        <Route path="/service" Component={service}></Route>
        <Route path="/contactus" Component={contactus}></Route>
      </Routes>
      </BrowserRouter>
  );
}
