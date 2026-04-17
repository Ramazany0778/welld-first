import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import Add from "./Add.jsx";
import Login from "./Login";


const Logins = createRoot(document.getElementById("signUp"));
Logins.render(

<Add />,
<Login />

);