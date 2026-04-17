import React from "react";
import Footer from "./Footer";
import "./App.css";
import {MyAppNav} from "./MyAppNav";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./styles.css";
import Login from "./Login";
import CreateAccount from "./CreateAccount";
import ChiSiamo from "./ChiSiamo";
import ComeLavoriamo from "./ComeLavoriamo";
import CosaFacciamo from "./CosaFacciamo";
import Trova from "./Trova";
import Profile from "./Profile";
import TypeWork from "./TypeWork";

function App() {


  return(
<>
<div>

    <App />
    <Footer />

  </div>
 <div>
     <BrowserRouter>
         <Routes>
             <Route element={<Layout />}>
                 <Route path= "/" element={<App /> } />
                 <Route path="Login" element={ <Login /> } />
                 <Route path="Register" element={<CreateAccount /> } />
                 <Route path="Chisiamo" element={ <ChiSiamo /> } />
                 <Route path="ComeLavoriamo" element={<ComeLavoriamo /> } />
                 <Route path="CosaFacciamo" element={<CosaFacciamo /> } />
                 <Route path="Trova" element={ <Trova />}  />
                 <Route path="Profile" element={ <Profile /> }></Route>
                 <Route path="TypeWork" element={ <TypeWork /> } />
             </Route>
         </Routes>
     </BrowserRouter>

 </div>

</>
     )

}

export default App;
