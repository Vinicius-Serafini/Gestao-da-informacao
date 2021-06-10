import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/core/modules/shared.module";
import { ImagemRoutingModule } from "./imagem-routing.module";
import { ImagemComponent } from "./imagem.component";
import { ImagemViewComponent } from './imagem-view/imagem-view.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        ImagemRoutingModule
    ],
    declarations: [
        ImagemComponent,
        ImagemViewComponent,
    ]
})

export class ImagemModule {}