import { Component, OnInit, VERSION } from "@angular/core";
import { catchError } from "rxjs/operators";
import { VarDeclarations } from "./declarations";
import { WeatherReportService } from "./weather.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent extends VarDeclarations implements OnInit {
  name = "Weather Dashboard";

  constructor(public weatherReportService: WeatherReportService) {
    super();
  }

  ngOnInit() {}

  // Get a open weather report
  getWeatherReport(cityName: any, index: any) {
    this.weatherReportService
      .getWeatherReport(cityName)
      .pipe(
        catchError((e: any) => {
          alert("Please enter the valid city name");
          return null;
        })
      )
      .subscribe(res => {
        return (this["cityNameResponse" + index] = {
          weather: res.weather[0].main,
          temp: res.main.temp,
          clouds: res.weather[0].description
        });
      });
  }
}
