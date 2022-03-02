import { CSSProperties, useState } from "react"
import { getWeather } from "./getWeather"
import Input from "./input"


function ShowWeather(){

    const [weatherData, setData] = useState([])

    const infoFromChild = (location: string) => {
        {getWeather(location).then( (d: any) => {setData(d)} ).catch( (reason) => {console.log(reason)} )}
       }

    return(
        <div>
            <Input childToParent={infoFromChild}/>
            <div style={weatherInfoStyle}>
            {weatherData.map((object, _i) => {return <p key={_i}>{object}</p>} )}    
            </div>      
        </div>
    )
}

const weatherInfoStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'space-around',

}

export default ShowWeather