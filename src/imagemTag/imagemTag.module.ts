import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ImagemTag } from "./model/ImagemTag.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature([ImagemTag])
    ],
})

export class ImagemTagModule {}