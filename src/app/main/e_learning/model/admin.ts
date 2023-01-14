export class Admin {
    IdAdmin : number;
    adminName : string;
    email : string;
    passWord : string;

    constructor(IdAdmin : number , adminName : string , email : string , passWord : string){

        this.IdAdmin = IdAdmin;
        this.adminName = adminName;
        this.email = email;
        this.passWord = passWord;
    }
}
