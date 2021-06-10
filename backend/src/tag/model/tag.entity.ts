import { ImagemTag } from "src/imagemTag/model/ImagemTag.entity";
import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "tag"})
export class Tag {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: "name", type: "varchar", length: 20})
    name: string;

    @OneToMany(type => ImagemTag, imagemTag => imagemTag.tag, 
        {cascade: ['insert', 'update']} )
    imagemTag: ImagemTag[];
}