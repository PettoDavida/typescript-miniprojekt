import { useState } from "react"
import Forecast from "./Forecast"
import { getWeather } from "./getWeather"
import SearchBar from "./SearchBar"


function ShowWeather(prop:any){

    const [weatherData, setData] = useState([])

    const infoFromChild = (location: string) => {
        {getWeather(location).then( (d: any) => {setData(d)} ).catch( (reason) => {console.log(reason)} )}
        prop.childToParent(location) 
       }



    return(
        <div>
            <SearchBar childToParent={infoFromChild}/>
            <Forecast parentToChild={weatherData}/>     
        </div>
    )
}



export default ShowWeather