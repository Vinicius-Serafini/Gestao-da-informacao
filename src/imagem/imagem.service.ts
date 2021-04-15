import { Injectable } from "@nestjs/common";
import { Imagem } from "./imagem.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
const fs = require("fs")



@Injectable()
export class ImagemService {

    constructor (
        @InjectRepository(Imagem)
        private repository: Repository<Imagem>
        ) { }
    

    async create(imagem: Imagem) {
        return this.repository.save(imagem);
    }

    async delete(id: number) {
        return this.repository.delete(id);
     }

    async findById(id: number) {
        return this.repository.findOne(id);
    }

    async findAll() {
        return this.repository.find();
    }

    async update(imagem: Imagem){
        return this.repository.update(imagem.id, imagem);
    }

    async getImageBase64(path: string){
        return fs.readFileSync(path, {encoding: "base64"})
    }

    async deleteImageFile(path: string){
        fs.unlink(path, (err) => {
            if (err) {
                return false;
            }
        });

        return true;
    }

}