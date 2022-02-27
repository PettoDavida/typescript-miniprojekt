import { CSSProperties } from "react";
import ShowWeather from "../components/showWeather";

function MainPage(){
    return(
        <div>
            <h1>Hello world</h1>
            <div>
                <ShowWeather />

            </div>
        </div>
    )

}



// let map: google.maps.Map;
// const center: google.maps.LatLngLiteral = {lat: 30, lng: -110};

// function initMap(){
//   map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
//     center,
//     zoom: 8
//   });
// }



const mapStyling: CSSProperties = {
    border: '0',
}

export default MainPage;