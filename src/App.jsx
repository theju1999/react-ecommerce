import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap's CSS file
import home from "./components/home";

export default function App() {
  return (
    <BrowserRouter>
         <Routes>
        <Route path="/"  Component={home}></Route>
      </Routes>
      </BrowserRouter>
  );
}
