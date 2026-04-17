import { NavLink, Link, useNavigate } from "react-router";

export function MyAppNav() {
    return (
        <nav>
            <NavLink to= "/" end>
                Homepage
            </NavLink>
<br />
            <NavLink to="Login" end>
                Login
            </NavLink>
<br />
            <NavLink to="Register" end>
                SignUp
            </NavLink>
<br />
            <NavLink to="Chisiamo" end>
                Chi siamo
            </NavLink>
<br />
            <NavLink to="ComeLavoriamo" end>
                Come lavoriamo
            </NavLink>
<br />
            <NavLink to="CosaFacciamo" end>
                Cosa facciamo
            </NavLink>
<br />
            <NavLink to="Trova" end>
                Trova il lavoro
            </NavLink>
<br />
            <NavLink to="Profile" end>
                My profile
            </NavLink>
<br />
            <NavLink to="TypeWork" end>
                TypeWork
            </NavLink>
        </nav>
    );
}

export function LoggedOutMessage()
{
    return (

        <p>
            <Link to="/Login"> </Link>
        </p>

    );
}

export function LoginPage() {

    let navigate = useNavigate();

    return (
        <>

            <MyAppNav />
            <Login
                onSuccess={() => {
                navigate("/Login");
                }}
                />
            <MyAppNav />

        </>
    );

}
