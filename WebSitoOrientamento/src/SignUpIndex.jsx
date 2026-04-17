import { createRoot } from "react-dom/client";
import "./styles.css";

import Add from "./Add.jsx";
import CreateAccount from "./CreateAccount";


const SignUp = createRoot(document.getElementById("create"));
SignUp.render(

    <Add />,
    <CreateAccount />

);