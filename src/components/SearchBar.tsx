import  { useState } from "react";
import '../components/CSS/SearchBar.css';

function SearchBar(prop: any) {

    const[location, target] = useState("")

    const getLocation = (event: any) => {
        if (event.keyCode === 13) {
            event.preventDefault()
            target(event.target.value)
            prop.childToParent(event.target.value) 
        }
       }

       const handleSubmit = (event: any) => {
           event.preventDefault();
           prop.childToParent(event.target[0].value)
      }

    return(
        <div className="search">
            <form className="searchForm" onSubmit={handleSubmit}>
            <input id="searchText" type="text" defaultValue={location} onKeyDown={getLocation} placeholder="Search Location"/>
            <input className="search-btn" type="submit" name=""  />
            </form>
        </div>
    );
}



export default SearchBar;

