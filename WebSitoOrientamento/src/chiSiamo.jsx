import React from "react";
import "./chiSiamo.css";

const QuestoProgetto = "Per aiutare a chi cerca un lavoro.";
const Siamo = "un grande gruppo refiremento di voi";





function ChiSiamo() {

    return (
<>
   <div>
        <p>
            Siamo {Siamo}
        </p>
       <br />
       <p>
           Questo progetto: {QuestoProgetto}
       </p>
   </div>
</>
    );
}