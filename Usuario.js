export class Usuario{
    id;
    email;
    senha;
    constructor(id,email,senha){
        this.id = id;
        this.email = email;
        this.senha = senha;
    }
    login(){
        return this.email + "está logado!"
    }
}
