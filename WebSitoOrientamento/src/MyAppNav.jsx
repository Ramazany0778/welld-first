import { NavLink } from "react-router";

export function MyAppNav() {
    return (
        <nav>
            <NavLink to= "/" end>
                pagina principale
            </NavLink>

            <NavLink to="Login/Sign" end>
                Login/Sign
            </NavLink>

            <NavLink to="Menu" end>
                Menu
            </NavLink>

            <NavLink to="Profile" end>
                Profile
            </NavLink>

            <NavLink to="TypeWork" end>
                TypeWork
            </NavLink>

            <NavLink to="Footer" end>
                Footer
            </NavLink>
        </nav>
    );
}