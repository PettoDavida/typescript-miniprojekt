import { CSSProperties } from "react";
import '../components/CSS/Forecast.css';

function Forecast (prop: any) {



    return (
        <div className="forecast-container">
            <div style={weatherInfoStyle}>
                {prop.parentToChild.map((object: any, _i: number) => {return <p key={_i}>{object}</p>} )}    
            </div> 
        </div>
    )

}

const weatherInfoStyle: CSSProperties = {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',

}

export default Forecast;