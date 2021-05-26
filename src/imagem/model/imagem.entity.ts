import { ImagemTag } from "src/imagemTag/model/ImagemTag.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "imagem"})
export class Imagem {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: "titulo", type: "varchar", length: 25})
    titulo: string;

    @Column({name: "descricao", type: "varchar", length: 250})
    descricao: string;

    @Column({name: "path", type: "varchar", length: 100})
    path: string; 

    @OneToMany(type => ImagemTag, imagemTag => imagemTag.imagem,
        { cascade: ['insert', 'update']} )
    imagemTag: ImagemTag[];
}