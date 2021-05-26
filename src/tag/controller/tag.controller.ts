import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { TagService } from "../service/tag.service";

@Controller("/tag")
export class TagController {

    constructor(private readonly service: TagService) {}

    @Get()
    findAll() {
        return this.service.findAll();
    }

    @Get(":id")
    findById(@Param('id') id: number) { 
        return this.service.findById(id);
    }

    @Post()
    create(@Body() tag) {
        return this.service.create(tag);
    }

    @Delete()
    delete(@Body() tag){
        const { id } = tag;
        
        return this.service.delete(id);
    }

    @Put()
    update(@Body() tag){
            return this.service.update(tag)
    }

}