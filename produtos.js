module.exports = class Produtos {
    constructor(){
        this.produtosListados = []
        this.exibeEstoque = []
    }
    cadastraProduto (nome, preco, estoque){
        this.produtosListados = {nome,preco,estoque}
        this.exibeEstoque.push(this.produtosListados)
        return this.exibeEstoque
    }
    listaEstoque(){
        return this.exibeEstoque.filter(valorEstoque => valorEstoque.estoque > 0)
    }
    estoqueVazio(){
        return this.exibeEstoque.filter(valorEstoque => valorEstoque.estoque === 0)
    }

    
}