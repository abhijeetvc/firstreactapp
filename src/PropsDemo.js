
function PropsDemo(){
    return(
        <div>
            <h1>Props</h1>
            <MyProps message="Hellloooooo"/>
        </div>
    )
}

function MyProps({message}){
    return(
        <div>
            <h2>Receive Props</h2>
            <p>Message : {message}</p>
        </div>
    )
}

export default PropsDemo

// pass object as props