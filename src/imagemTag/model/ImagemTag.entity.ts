import { Imagem } from "src/imagem/model/imagem.entity";
import { Tag } from "src/tag/model/tag.entity";
import { Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("imagem_tag")
export class ImagemTag {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => Imagem, imagem => imagem.imagemTag)
    imagem: Imagem;
    
    @ManyToOne(type => Tag, tag => tag.imagemTag)
    tag: Tag

}