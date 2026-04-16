import React from "react";


function Age() {
    let User1;
    let User2;
    let User3;

    const Age = [
    (User1 = { Age: "" }),
    (User2 = { Age: "" }),
    (User3 = { Age: "" }),
  ];
}

function canWork() {
  alert({ canWork } >= 15 ? "puoi lavorare" : "non puoi lavorare");
}

function CreateAccount() {
  const dataUsers = [
    {
      userName: "",
      password: "",
    },
    {
      userName: "",
      password: "",
    },
    { userName: "",
      password: "" },
  ];

  return (
    <>
      <div>
        <h1>Create account</h1>
      </div>
      <div>
        <p>UserName</p>
        <input type="text" />
      </div>

      <br />

      <div>
        <p>UserPassword</p>
        <input type="text" />
      </div>

      <br />

      <div>
        <p> E-mail </p>
        <input type="text" />
      </div>

      <br />

      <div>
        <p> URL della foto </p>
        <input type="text" />
      </div>

      <br />

      <div>
        <p> Age </p>
        <input type={Age} />
      </div>

      <hr />
      <br />

      <div>
        <button onClick={canWork}> Create </button>
      </div>
    </>
  );
}

export default CreateAccount;
