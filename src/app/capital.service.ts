import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CapitalService {

  constructor() { }

  getCapital(){
    return[
      {"India":"Delhi"},
      {"Germany":"Berlin"}
    ];
  }
}
