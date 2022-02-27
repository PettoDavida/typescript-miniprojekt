import { useState } from "react"

function Input(){

    const[location, target] = useState("")

    const getLocation = (event: any) => {
        target(event.target.value)
        console.log(event.target.value)
       }

    return(
        <input
        type="text"
        value={location}
        onChange={getLocation}
        placeholder="Enter location"/>
        )
}



export default Input