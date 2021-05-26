import { Injectable } from "@nestjs/common";
import { Imagem } from "../model/imagem.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
const fs = require("fs")

@Injectable()
export class ImagemService {

    constructor (
        @InjectRepository(Imagem)
        private repository: Repository<Imagem>
        ) { }
    

    create(imagem: Imagem) {
        return this.repository.save(imagem);
    }

    delete(id: number) {
        return this.repository.delete(id);
    }

    findById(id: number) {
        return this.repository.findOne(id);
    }

    async findAll() {
        return this.repository.find();
    }

    findByTags(tagsId: number[]) {
        
        return this.repository.createQueryBuilder("imagem")
        .leftJoinAndSelect("imagem.imagemTag", "imagemTag")
        .where("imagemTag.tagId IN (:...tagsId)", { tagsId: tagsId }) 
        .getMany();
    }

    update(imagem: Imagem){
        return this.repository.save(imagem);
    }

    getImageBase64(path: string){
        return fs.readFileSync(path, {encoding: "base64"})
    }

    deleteImageFile(path: string){
        let img_deleted = true

        fs.unlink(path, (err) => {
            if (err) {
                img_deleted = false;
            }
        });

        return img_deleted;
    }

}