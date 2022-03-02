import ShowWeather from "../components/showWeather";
import Location from "../components/Location";
import Clock from '../components/Clock';
import Date from '../components/Date';
import { useState } from "react";


function MainPage(){
    const [location, setLocation] = useState('')
    const infoFromChild = (location: string) => {
            setLocation(location)       
       }
    return(
        <div>
            <div>
                <ShowWeather childToParent={infoFromChild}/>
                <div>
                <Clock />
                <Date />
                </div>
            </div>
            <Location parentToChild={location}/>
        </div>
    );
}

export default MainPage;