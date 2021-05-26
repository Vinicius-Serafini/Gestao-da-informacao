import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ImagemModule } from './imagem/imagem.module';
import { Imagem } from './imagem/model/imagem.entity';
import { Tag } from './tag/model/tag.entity';
import { TagModule } from './tag/tag.module';
import { ImagemTagModule } from './imagemTag/imagemTag.module' 
import { ImagemTag } from './imagemTag/model/ImagemTag.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
        type: "sqlite",
        database: "database.db", 
        logging: true,
        synchronize: true, 
        entities: [
          Imagem,
          Tag,
          ImagemTag
          ]
      }),
    ImagemModule,
    TagModule,
    ImagemTagModule
  ],
  controllers: [ AppController ],
  providers: [ AppService ],
})

export class AppModule {}
