import { Tag } from "./tag.model";

export interface Imagem {
    id?: number; 
    titulo: string;
    descricao: string;
    path: string;
    tags?: Tag[];
}