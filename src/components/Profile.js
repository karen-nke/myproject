//Making use of property 

function Profile(props){ //accepting property 
    console.log(props)

    //props.name = "Jake" 
    //Props are immutable and read only (Couldnt be modify) 
    //Instead of using props, use state

    return(
    <h1>
        Name : {props.name} {props.lastname}
        {props.children}
    </h1>

    )
}

export default Profile;