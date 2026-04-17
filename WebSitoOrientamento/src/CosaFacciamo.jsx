import React from "react";
import "./CosaFacciamo.css";

function cosaFacciamo() {

    const Siamo = "Noi cerchiamo di trovare qualche lavoro per voi.";
    const mesaggioPers = "potresti trovare il lavoro che vorresti."

    return (
        <>
            <div>
                <p>
                    cosa offriamo per voi: {Siamo}
                </p>
                <br />
                <p>
                    Spero che {mesaggioPers}
                </p>
            </div>
        </>
    );


}

