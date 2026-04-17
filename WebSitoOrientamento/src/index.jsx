import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./styles.css";

import App from "./App";
import Login from "./Login";
import ChiSiamo from "./ChiSiamo";
import ComeLavoriamo from "./ComeLavoriamo";
import CosaFacciamo from "./CosaFacciamo";
import TrovaIlLavoro from "./TrovaIlLavoro";
import CreateAccount from "./CreateAccount";
import Profile from "./Profile";
import TypeWork from "./TypeWork";
import Footer from "./Footer";


const root = document.getElementById("root");
ReactDOM.createRoot(root).render(


    <BrowserRouter>
        <Routes>
            <Route path= "/" element={<App /> } />

            <Route element = {"Login/Sign" } >
                <Route path="Login" element={ <Login /> } />
                <Route path={"Register"} element={<CreateAccount /> } />
            </Route>

            <Route path="Menu">
                <Route path="Chi siamo" element={ <ChiSiamo /> } />
                <Route path="comeLavoriamo" element={<ComeLavoriamo /> } />
                <Route path="cosaFacciamo" element={<CosaFacciamo /> } />
                <Route path="trovaIlLavoro" element={ <TrovaIlLavoro />}  />
            </Route>

            <Route path="Profile" >
                <Route path="Profile" element={ <Profile /> }></Route>
            </Route>

            <Route path="TypeWork" >
                <Route path="TypeWork" element={ <TypeWork /> } />
            </Route>

            <Route path="Footer" >
                <Route path="Footer" element={ <Footer /> } />

            </Route>
        </Routes>
    </BrowserRouter>
);
