import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ImagemController } from "./controller/imagem.controller";
import { Imagem } from "./model/imagem.entity";
import { ImagemService } from "./service/imagem.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([Imagem])
    ],
    providers: [ImagemService],
    controllers: [ImagemController],
    exports: [ImagemService]
})

export class ImagemModule {}