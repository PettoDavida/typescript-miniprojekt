import { useState } from "react"

function Input(prop: any){

    const[location, target] = useState("")

    const getLocation = (event: any) => {
        target(event.target.value)
        prop.hello(event.target.value)
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