import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Tag } from "./tag.entity";

@Injectable()
export class TagService {

    constructor (
        @InjectRepository(Tag)
        private repository: Repository<Tag>
        ) { }
    

    async create(tag: Tag) {
        return this.repository.save(tag);
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

    async update(tag: Tag){
        return this.repository.update(tag.id, tag);
    }

}