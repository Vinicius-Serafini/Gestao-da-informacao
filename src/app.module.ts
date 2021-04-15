import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ImagemController } from './imagem/imagem.controller';
import { Imagem } from './imagem/imagem.entity';
import { ImagemService } from './imagem/imagem.service';
import { TagController } from './tag/tag.controller';
import { Tag } from './tag/tag.entity';
import { TagService } from './tag/tag.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
        type: "sqlite",
        database: "database.db", 
        synchronize: true, 
        entities: [
          Imagem,
          Tag,
          ]
      }),
      TypeOrmModule.forFeature([
        Imagem, 
        Tag,
      ]),
  ],
  controllers: [
    AppController,
    ImagemController,
    TagController,
  ],
  providers: [
    AppService,
    ImagemService,
    TagService,
  ],
})
export class AppModule {}
