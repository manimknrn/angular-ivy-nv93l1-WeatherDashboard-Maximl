import {
  HttpClient,
  HttpHeaders,
  HttpClientModule,
  HttpResponse
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable()
export class WeatherReportService {
  apiKey = "29c2abd489f702fea6c3708a0a89efd7";
  apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
  constructor(public http: HttpClient) {}

  // API call to get weather details from OpenWeatherAPI
  getWeatherReport(country: any): Observable<any> {
    return this.http.get<any>(this.apiUrl + country + "&APPID=" + this.apiKey);
  }
}
