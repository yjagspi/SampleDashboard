import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { ScatterPlotComponent } from './components/scatter-plot/scatter-plot.component';
import {ScatterDataServiceService} from './services/scatter-data-service.service' ;

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    ScatterPlotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ScatterDataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
