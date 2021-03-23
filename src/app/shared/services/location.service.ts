import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Location} from '../model/locations.model';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
url: string;
  constructor(private http:HttpClient) { 
  this.url='https://blooming-thicket-37635.herokuapp.com/https://syntra.terugsamen.be/hungryhippos/public/api/locations';
  }

searchLocations(keyword):Observable<any[]>{
  return this.http.get<any[]>(this.url+`/${keyword}`)
  .pipe()
}
}
