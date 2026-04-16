import React from "react";
import Footer from "./Footer";
import Login from "./Login";
import Menu from "./Menu";
import CreateAccount from "./CreateAccount";
import Profile from "./Profile";
import TypeWork from "./TypeWork";
import "./App.css";

function App() {


  return(
<>
 <div>
   <CreateAccount />
   <Profile />
   <TypeWork />
   <Footer />
   <Login />
   <Menu />
 </div>

</>
      )

}

export default App;
