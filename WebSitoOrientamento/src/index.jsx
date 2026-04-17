import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./styles.css";

import App from "./App";
import Login from "./Login";
import ChiSiamo from "./ChiSiamo";
import ComeLavoriamo from "./ComeLavoriamo";
import CosaFacciamo from "./CosaFacciamo";
import Trova from "./Trova";
import CreateAccount from "./CreateAccount";
import Profile from "./Profile";
import TypeWork from "./TypeWork";
import Footer from "./Footer";


const root = document.getElementById("root");
ReactDOM.createRoot(root).render(

    <App />
);
