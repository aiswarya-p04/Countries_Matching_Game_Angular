import { Component, OnInit } from '@angular/core';
import { CapitalService } from '../capital.service';
@Component({
  selector: 'app-new-country',
  templateUrl: './new-country.component.html',
  styleUrls: ['./new-country.component.css']
})
export class NewCountryComponent implements OnInit {
public data=[
  {"India":"Delhi"},
  {"Germany":"Berlin"}
];
  constructor() { }

  ngOnInit(): void {

  }

}
