import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ChipsComponent } from "../components/chips/chips.component";
import { HeaderComponent } from "../components/header/header.component";
import { ImagemCardComponent } from "../components/imagem-card/imagem-card.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        
    ],
    declarations: [
        ImagemCardComponent,
        ChipsComponent,
        HeaderComponent

    ],
    exports: [
        ImagemCardComponent,
        ChipsComponent,
        HeaderComponent
    ]
})

export class SharedModule {};