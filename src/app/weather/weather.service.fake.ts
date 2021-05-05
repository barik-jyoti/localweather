import { Observable, of } from "rxjs";
import { ICurrentWeather } from "../interfaces";
import { IWeatherService } from "./weather.service";

const fakeWeather: ICurrentWeather = {
    city: 'Bangalore',
    country: 'India',
    date: 1485789600,
    image: '',
    temperature: 280.32,
    description: 'light drizzle'
}
export class WeatherServiceFake implements IWeatherService{
    public getCurrentWeather(city: string, country: string): Observable<ICurrentWeather> {
        return of(fakeWeather);
    }

}