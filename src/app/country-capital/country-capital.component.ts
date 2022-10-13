import { Component, Input, OnInit } from '@angular/core';

type Data = {
  [key: string]: string;
};
@Component({
  selector: 'app-country-capital',
  templateUrl: './country-capital.component.html',
  styleUrls: ['./country-capital.component.css']
})
export class CountryCapitalComponent {
  @Input() data: any;
  redButtons: any = [];
  firstClickData: any = "";

  capital: any = "";
  keyValueClicked(pair: any, keyValueItem: any) {  //Pair= {India:"Delhi"}, keyValueItem= India
    console.log("Pair clicked", pair)

    console.log("mouse click", keyValueItem);
    //On first click of button
    if (this.firstClickData === "") {
      this.redButtons=[];
      this.firstClickData = keyValueItem;     //firstclick= India
      console.log("firstclick", this.firstClickData)
      this.capital = Object.values(pair);  //capital: ['Delhi']
      console.log("capital clicked", this.capital)


    }
    //On second click of button
    else {
      console.log("pair clicked", pair);   //pair clicked {India: 'Delhi'}

      console.log(this.capital)  //['Delhi']

      if (keyValueItem == this.capital) {
        console.log("yeshhhh")
        console.log("kuch bhi", this.data.filter((newValue: any) => newValue != pair))
        this.data = this.data.filter((newValue: any) => newValue != pair)
        this.firstClickData = "";
      }
      else if (this.firstClickData == this.capital) {
        if (Object.values(pair) == this.firstClickData) {
          console.log("Dekhte hai")
          this.data = this.data.filter((newValue: any) => newValue != pair)
          this.firstClickData = "";
        }
      }
      else {
        console.log("red")


      }
      this.redButtons.push(this.firstClickData, keyValueItem);
        console.log('danger', this.redButtons)
      this.firstClickData = "";
      keyValueItem = "";
      this.capital = "";
      pair = ""

    }

  }

  constructor() { }


}
