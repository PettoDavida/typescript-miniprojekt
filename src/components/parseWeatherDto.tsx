import { kelvinToCelsius } from "./conversions";
import { IWeatherResponseDTO } from "./getWeather";


export async function parseWeatherDto(response: IWeatherResponseDTO){
    const tempC = kelvinToCelsius(response.main.temp)

    const feelsLikeC = kelvinToCelsius(response.main.feels_like)

    const windSpeedMPS = response.wind.speed

    const addListSuffix = (idx: number) => `${((idx + 1) !== response.weather.length) ? ', ' : ''}`;
    const conditions = response.weather.reduce(
        (a, c, i) => a + `${c.main} (${c.description})${addListSuffix(i)}`, ''
    );

    const lines = [
        `Conditions: ${conditions}`,
        `Temperature: C: ${tempC.toFixed(2)}`,
        `Feels Like: C: ${feelsLikeC.toFixed(2)}`,
        `Pressure: ${response.main.pressure} hPa`,
        `Humidity: ${response.main.humidity}%`,
        `Visibility: ${response.visibility}`,
        `Wind: ${windSpeedMPS.toFixed(2)} meters per second at ${response.wind.deg} degrees`
    ]

    return lines

}