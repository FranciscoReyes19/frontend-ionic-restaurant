import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { NewsDetailRealizados } from "./news-realizados";
import { PipesModule } from "../../app/pipes.module";

@NgModule({
  declarations: [NewsDetailRealizados],
  imports: [IonicPageModule.forChild(NewsDetailRealizados), PipesModule],
  exports: [NewsDetailRealizados]
})
export class NewsDetailRealizadosModule {}
