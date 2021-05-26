import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TagController } from "./controller/tag.controller";
import { Tag } from "./model/tag.entity";
import { TagService } from "./service/tag.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([Tag])
    ],
    providers: [TagService],
    controllers: [TagController],
    exports: [TagService]
})

export class TagModule {}