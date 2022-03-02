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
        // <input
        // id="searchText"
        // type="text"
        // defaultValue={location}
        // onKeyDown={getLocation}
        // placeholder="Search Location"/>
        <form className="searchForm">
            <input id="searchText" type="text" defaultValue={location} onKeyDown={getLocation} placeholder="Search Location"/>
            <input className="search-btn" type="submit" name="" value="Search"/>
            </form>
        )
}



export default Input