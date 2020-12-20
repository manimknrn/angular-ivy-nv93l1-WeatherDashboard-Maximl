import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { HttpClientModule } from "@angular/common/http";
import { WeatherReportService } from "./weather.service";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatAutocompleteModule,
    CommonModule
  ],
  declarations: [AppComponent, HelloComponent],
  providers: [WeatherReportService],
  bootstrap: [AppComponent]
})
export class AppModule {}
