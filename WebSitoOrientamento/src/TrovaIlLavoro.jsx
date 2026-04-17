import React from "react";
import "./TrovaIlLavoro.css";

function trovaIlLavoro() {
    const perTrovareIlLavoro = "Ora vai sul FindWork e cerca il tuo lavoro desiderato ";
    const Tu = "Analizza molto bene il nostro sito.";


    return(
        <>
            <div>
                <p>
                   {perTrovareIlLavoro}
                </p>
                <br />
                <p>
                    {Tu}
                </p>
            </div>
        </>
    )
}