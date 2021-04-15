import { Controller, Delete, Get, Param, Post, Put, Body, UseInterceptors, UploadedFile } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { Observable, of } from "rxjs";
import { ImagemService } from "./imagem.service";
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';
import { Imagem } from "./imagem.entity";
const path = require('path');
const fs = require('fs');


@Controller("/imagem")
export class ImagemController {

    constructor(private readonly service: ImagemService) {}

    @Post('upload')
    @UseInterceptors(FileInterceptor('file', {
        storage: diskStorage({
            destination: './uploads/images',
            filename: (req, file, cb) => {
                const filename: string = path.parse(file.originalname).name.replace(/\s/g, '') + uuidv4();
                const extension: string = path.parse(file.originalname).ext;
                
                cb(null, `${filename}${extension}`)
            }
        })

    }))
    async uploadFile(@UploadedFile() file, @Body() body) {
        const { titulo, descricao } = body;

        let img = new Imagem();
        img.titulo = titulo;
        img.descricao = descricao; 
        img.path = file.path;

        return this.service.create(img);  
    }

    @Get()
    async findAll() {
        let img_list = await this.service.findAll();

        console.log(img_list)
        return img_list.map(img => ({
            titulo: img.titulo,
            descricao: img.descricao,
            img_base64: this.service.getImageBase64(img.path)
        }));
    }

    @Get(":id")
    async findById(@Param() id: number) {
        let {titulo, descricao, path} = await this.service.findById(id)
        let img_base64 =  this.service.getImageBase64(path);

        return ({titulo, descricao, img_base64}); 
    }


    @Delete()
    async delete(@Body() body) {
        let img = await this.service.findById(body.id)
        
        if (!this.service.deleteImageFile(img.path)) {
            return ({message: "Failed to delete"})
        }

        return this.service.delete(img.id);
    }

    @Put()
    async update(@Body() imagem){
        return this.service.update(imagem);
    }


}