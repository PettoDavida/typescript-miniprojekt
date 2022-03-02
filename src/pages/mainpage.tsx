import ShowWeather from "../components/showWeather";
import SearchBar from "../components/SearchBar";
import Location from "../components/Location";
import Forecast from "../components/Forecast";
import Clock from '../components/Clock';
import Date from '../components/Date';
import About from "../pages/About";


function MainPage(){
    return(
        <div>
            <h1>Hello world</h1>
            <div>
                <ShowWeather />
            </div>
            <About />
            <SearchBar/>
            <Location/>
            <Forecast/>
        </div>
    );
}

export default MainPage;