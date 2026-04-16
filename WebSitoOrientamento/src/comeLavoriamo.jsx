import React from "react";
import "./comeLavoriamo.css";

function comeLavoriamo() {
    const noiLavoriamo = "noi guardiamo per le offerte di lavoro e vi avvisiamo";
    const inQuestoModo = "potresti trovare un lavoro molto veloce e con sicurenzza";

    return (
        <>
        <div>

            <p>
                Come lavoriamo: {noiLavoriamo}
            </p>
            <br />
            <p>
                In questo modo {inQuestoModo}
            </p>

        </div>
        </>
    );
}