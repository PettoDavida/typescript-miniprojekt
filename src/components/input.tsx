import { useState } from "react"

function Input(prop: any){

    const[location, target] = useState("")

    const getLocation = (event: any) => {
        if (event.keyCode === 13) {
            event.preventDefault()
            target(event.target.value)
            prop.childToParent(event.target.value) 
        }
       }

    return(
        <input
        type="text"
        defaultValue={location}
        onKeyDown={getLocation}
        placeholder="Enter location"/>
        )
}



export default Input