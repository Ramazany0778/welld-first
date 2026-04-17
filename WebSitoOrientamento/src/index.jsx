import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";
import Footer from "./Footer";
import Login from "./Login";
import Menu from "./Menu";

const root = createRoot(document.getElementById("root"));
root.render(

    <App />,
    <Footer />,
    <Login />,
    <Menu />,

);
