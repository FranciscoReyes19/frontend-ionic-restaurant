import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { AngularFireDatabase } from "@angular/fire/database";
@IonicPage()
@Component({
  selector: "page-realizados",
  templateUrl: "news-realizados.html"
})
export class NewsDetailRealizados {
  id: any;
  newsDetails: any = {};
  public Resp: Array<any> = [];

  constructor(
    public af: AngularFireDatabase,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.id = this.navParams.get("id");
        af
        .object("/news2/" + this.id)
        .valueChanges()
        .subscribe((res: any) => {
          this.newsDetails = res;
        });
        //SECOND CALL
          af
            .list("/news2/" + this.id+"/galery")
            .valueChanges()
            .subscribe(data => {
            //console.log(res.galery);
            this.Resp = data;
            //this.newsDetails = data;
            });
  }
}
