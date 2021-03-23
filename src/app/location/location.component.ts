import { Component, OnInit } from '@angular/core';
import{LocationService} from '../shared/services/location.service'
import {Observable} from 'rxjs';
import {Location} from '../shared/model/locations.model';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  locationName:string;
  location$: Observable<any[]>
  constructor(private locationService: LocationService) { }
  

  ngOnInit(): void {
  }
searchLocations(){
  this.location$= this.locationService.searchLocations(this.locationName);
}
}
