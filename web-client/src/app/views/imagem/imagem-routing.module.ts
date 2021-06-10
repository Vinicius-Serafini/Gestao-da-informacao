import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ImagemViewComponent } from "./imagem-view/imagem-view.component";
import { ImagemComponent } from "./imagem.component";

const routes: Routes = [
    {
        path: '',
        component: ImagemComponent,
        children: [
            {
                path: '',
                component: ImagemViewComponent,
                data: {title: 'Imagens'}
            }
        ]
            
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ImagemRoutingModule {}