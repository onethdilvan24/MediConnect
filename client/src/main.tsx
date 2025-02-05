import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import { Login } from "./Pages/Login";
import { CreateAccount } from "./Pages/CreateAccount";
import { Home } from "./Pages/Home";
import {AllDoctors} from "./Pages/AllDoctors";
import  About  from "./Pages/About";
import Profile from "./Pages/PationProfile";
import BookingAppointment from "./Pages/BookAppointment";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />       
        <Route path="/login" element={<Login />} />
        <Route path="/createaccount" element={<CreateAccount />} />
        <Route path="/alldoctors" element={<AllDoctors />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/Booking" element={<BookingAppointment />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
