import React from "react";
import "./CosaFacciamo.css";

function cosaFacciamo() {

    const Siamo = "Noi cerchiamo di trovare qualche lavoro per voi.";
    const mesaggioPers = "potresti trovare il lavoro che vorresti."

    return (
        <>
            <div>
                <p1>
                    cosa offriamo per voi: {Siamo}
                </p1>
                <br />
                <p1>
                    Spero che {mesaggioPers}
                </p1>
            </div>
        </>
    );
}

export default cosaFacciamo