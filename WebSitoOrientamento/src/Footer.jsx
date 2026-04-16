import React from "react";
import "./Footer.css";

function Footer() {
  const name = "TrovaWork";
  const numero = "0123456789";
  const mail = "trovawork@gmail.com";
  const indrizzio = "Via trovawork 12/B 8976, trovawork";

  return (
    <>
      <div>
        <h1> {name} </h1>
        <p> Numero: {numero} </p>
        <p> Mail: {mail} </p>
        <p> Indrizzio: {indrizzio} </p>
      </div>
    </>
  );
}

export default Footer;
