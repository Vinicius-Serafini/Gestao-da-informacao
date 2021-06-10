import { Controller, Delete, Get, Param, Post, Put, Body, UseInterceptors, UploadedFile, Query } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { ImagemService } from "../service/imagem.service";
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';
import { Imagem } from "../model/imagem.entity";
const path = require('path');


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
        const imagem = JSON.parse(body.imagem);

        let img = new Imagem();
        img.titulo = imagem.titulo;
        img.descricao = imagem.descricao; 
        img.path = file.path;
        img.imagemTag = imagem.tags;
        
        return await this.service.create(img);
    
    }

    @Get()
    async findAll() {
        let img_list = await this.service.findAll();

        return img_list.map(img => ({
            titulo: img.titulo,
            descricao: img.descricao,
            img_base64: this.service.getImageBase64(img.path)
        }));
    }

    @Get("/findById/:id")
    async findById(@Param() id: number) {
        let {titulo, descricao, path} = await this.service.findById(id)
        let img_base64 =  this.service.getImageBase64(path);

        return ({titulo, descricao, img_base64}); 
    }

    @Get('/findByTags')
    async findByTags(@Query("tags") tags) {
        const JSONtags = JSON.parse(tags);

        return this.service.findByTags(JSONtags)
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
    async update(@Body() body){
        return await this.service.update(body);
    }


}