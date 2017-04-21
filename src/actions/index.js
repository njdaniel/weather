/**
 * Created by nicholas on 4/21/17.
 */
import axios from 'axios';

const API_KEY = '47df23be39eed91149aca806b747e301';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';


export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    return {
      type: FETCH_WEATHER,
      payload: request
    };
}