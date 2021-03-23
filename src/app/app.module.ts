import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LocationService } from './shared/services/location.service';
import { LocationComponent } from './location/location.component';


@NgModule({
  declarations: [
    AppComponent,
    LocationComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  
  ],
  providers: [
    LocationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
