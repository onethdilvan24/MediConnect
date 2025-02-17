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
import MyAppointments from "./Pages/MyAppointment";
import Myoder from "./Pages/MyOrders";
import Dashboard from "./Dashboard/Dashboard";
import Appointment from "./Dashboard/Appointment";
import AddDoctor from "./Dashboard/AddDoctor";
import Doctorlist from "./Dashboard/DoctorList";
import { Admin } from "./Dashboard/Admin";
import { ModelChat } from "./Components/ModelChat";
import { AnimatedTestimonialsDemo } from "./Components/AnimatedTestimonialsDemo";
import OderMedicin from "./Pages/OderMedicin";
import { Shop } from "./Pages/Shop";
import { Shopcards } from "./Components/ShopCards";
import { MedicalEquipment } from "./Pages/MedicalEquipment";


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
        <Route path="/MyAppointments" element={<MyAppointments />} />
        <Route path="/Myoder" element={<Myoder />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Appointment" element={<Appointment />} />
        <Route path="/AddDoctor" element={<AddDoctor />} />
        <Route path="/Doctorlist" element={<Doctorlist />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/ModelChat" element={<ModelChat />} />
        <Route path="/AnimatedTestimonialsDemo" element={<AnimatedTestimonialsDemo />} />
        <Route path="/OrderMedicin" element={<OderMedicin />} />
        <Route path="/Shop" element={<Shop/>} />
        <Route path="/Shopcards" element={<Shopcards/>} />
        <Route path="/MedicalEquipment" element={<MedicalEquipment/>} />


      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
