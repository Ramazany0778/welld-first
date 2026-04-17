import React from "react";

function Login() {
  //JavaScript
  const utenti = [
    {
      userName: "User1",
      password: 123,
    },
    {
      userName2: "User2",
      password: 234,
    },
    { userName3: "User3",
      password: 345 },
  ];

  let User1;
  let User2;
  let User3;

  const Age = [{ Age: 20 }, { Age: 13 }, { Age: 15 }];

  function canWork(age) {
    return age >= 15 ? "puoi lavorare" : "non puoi lavorare";
  }

  return (
      <>
        <div>
          <h1>FindWork</h1>
        </div>
        <div>
          <div>
            <p>Nome di utente</p>
            <input type="text" />
          </div>
          <div>
            <p>Password di utente</p>
            <input type="text" />
          </div>
          <br></br>
          <div>
            <button onClick={() => {}}> Login </button>
          </div>
        </div>
      </>
  );
}

export default Login

