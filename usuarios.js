module.exports = class Usuario {
    constructor(){
        this.exibirUser = []
        this.listaUser = []
    }
    cadastroUser(nome, email, dinheiro){
        this.exibirUser = {nome, email, dinheiro}
        this.listaUser.push(this.exibirUser)
        return this.listaUser
    }

}
