import SearchBar from "../components/SearchBar";
import Location from "../components/Location";
import Forecast from "../components/Forecast";


function MainPage(){
    return(
        <div>
            <h1>Hello world</h1>
            <SearchBar/>
            <Location/>
            <Forecast/>
        </div>
    );
}

export default MainPage;