console.log("JS initialized")

function openAlert() {
    alert("Stai segiendo prossima pagina")

}

function x(){
    alert("provo")
}

function MyButton(){
    return( <button> My button</button>
    );
}

export default function MyApp(){
    return(
        <div>
            <h1>Welcome to my app</h1>
            <MyButton/>
        </div>
    );
}

<img className= "Avatar" />

return (
    <h1>
        {user.name}
    </h1>
)

return (
    <img
        className="avatar"
        src={user.imageUrl}
        />
);

const user = {
    name: 'utente',
    imageUrl: '',
    imageSize: 90,

};

export default function Profile() {
    return (
        <>
        <h1>{user.name}</h1>
            <img
                className="avatar"
                src={user.imageUrl}
                alt={'Photo of ' + user.name}
                style={{
                    width: user.imageSize,
                    height: user.imageSize
                }}
            />
        </>
    );
}

