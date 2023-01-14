export class Comment {
    id : number;
    content : string;
    score : number;
    username : string;
    email : string;
    idCours : number;
    
    constructor(idComment : number , textComment : string , score : number ){

        this.id = idComment;
        this.content = textComment;
        this.score = score;
    }
}
