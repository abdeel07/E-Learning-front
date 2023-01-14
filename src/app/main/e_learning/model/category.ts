import { Cours } from "./cours";

export class Category {
    id: number;
    title: string;
    cours : Cours[];
    img : string;
    description : string;

    constructor(id : number , title : string , cours :Cours[] ){

        this.id = id;
        this.title = title;
        this.cours = cours;
    }
}
