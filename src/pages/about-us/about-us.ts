import { Component, ViewChild } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Nav, Platform } from "ionic-angular";
import { Slides } from "ionic-angular";
import { CallNumber } from "@ionic-native/call-number";
import { EmailComposer } from "@ionic-native/email-composer";

@IonicPage()
@Component({
  selector: "page-about-us",
  templateUrl: "about-us.html",
  providers: [CallNumber, EmailComposer]
})
export class AboutUsPage {
  @ViewChild(Slides) slides: Slides;
  @ViewChild(Nav) nav: Nav;
  contactNo: any = 2721357072;
  whatsappUrl: any = "https://api.whatsapp.com/send?phone=522721357072";

  constructor(
    public platform: Platform,
    public navCtrl: NavController,
    public callNumber: CallNumber,
    public navParams: NavParams,
    public emailComposer: EmailComposer
  ) {}

  goToSlide() {
    this.slides.slideTo(2, 500);
  }

  callUs() {
    this.callNumber
      .callNumber(this.contactNo, true)
      .then(() => {})
      .catch(() => {});
  }

  gotogoogleMap() {
    this.navCtrl.push("LocationPage");
  }
  whatsapp(){
    //location.href = this.whatsappNo;
    window.open(this.whatsappUrl,"_system","location=yes");
  }

  contact() {
    let email = {
      // You can change This Email to your own Email to receive contact Email.
      to: "ohanatoursorizaba@gmail.com",
      isHtml: true
    };
    this.emailComposer.open(email);
  }
}
