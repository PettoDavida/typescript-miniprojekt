import axios from 'axios'
import { parseWeatherDto } from './parseWeatherDto'

export interface IWeatherResponseDTO {
    weather: Array<{
        main: string,
        description: string
    }>,
    main: {
        temp: number,
        feels_like: number,
        pressure: number,
        humidity: number
    },
    visibility: number,
    wind: {
        speed: number,
        deg: number,
    }
}

function makeUrl(location: string){
    const apiKey = 'f7ca6deb859c370ecd4f5c74fb3159b0'
    const baseUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + location + "&appid=" + apiKey

    return baseUrl
}

async function queryApi(target: string){
    const response = await axios.get<IWeatherResponseDTO>(makeUrl(target))
    return response.data as IWeatherResponseDTO
}

export async function getWeather(target: string){
    const dto = await queryApi(target)
    return parseWeatherDto(dto)
}