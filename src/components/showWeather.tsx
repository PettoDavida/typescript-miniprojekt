import { CSSProperties, useState } from "react"
import { getWeather } from "./getWeather"
import Input from "./input"


function ShowWeather(){

    const [weatherData, setData] = useState([])

    

    const infoFromChild = (location: string) => {
        {getWeather(location).then( (d: any) => {setData(d)} )}
       }

    return(
        <div>
            <Input hello={infoFromChild}/>
            <div style={weatherInfoStyle}>
            {weatherData.map((object, _i) => {return <p>{object}</p>} )}    
            </div>      
        </div>
    )
}

const weatherInfoStyle: CSSProperties = {
    display: 'grid',

}

export default ShowWeather