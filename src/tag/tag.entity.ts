import { Imagem } from "src/imagem/imagem.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "tag"})
export class Tag {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: "name", type: "varchar", length: 20})
    name: string;

    @ManyToMany(() => Imagem)
    imagens: Imagem[];
}