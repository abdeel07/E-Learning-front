import { Category } from "./category";
import { Comment } from "./comment";
import { Skill } from "./skill";

export class Cours {
    id: number;
    title: string;
    comments : Comment[];
    skills : Skill[];
    description : string;
    img : string;
    categoryId : number;

    constructor(id : number , title : string , comments : Comment[], skills : Skill[] ){

      this.id = id;
      this.title = title;
      this.comments = comments;
      this.skills = skills;
  }
}
