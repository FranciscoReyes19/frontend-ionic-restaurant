import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-location",
  templateUrl: "location.html"
})
export class LocationPage {
  title: string = "Ubicacion ";
  lat: number = 18.846174;
  lng: number = -97.103276;
  zoom: number = 12;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}
}
