var items = [];
var soma = 0;

document.querySelector('input[type=submit]')
.addEventListener("click", () => {
    let nomeProd = document.querySelector("input[name=nome_produto]");
    let valorProd = document.querySelector("input[name=valor_produto]");

    if(!nomeProd.value || !valorProd.value){
        alert("Porfavor preencha os campos");
    }
    else{
        cadastraProd(nomeProd.value, valorProd.value);
        mostraProdutos(nomeProd.value, valorProd.value);
        nomeProd.value = "";
        valorProd.value = "";
    }  
    
})

function cadastraProd(nomeProd, valorProd){
    
    items.push({
        nome: nomeProd,
        valor: valorProd
    })
    //alert(nomeProd + valorProd)
}

function mostraProdutos(){
    let listaProd = document.querySelector(".lista-produtos");
    listaProd.innerHTML = "";
    soma = 0;

    items.map(function(value, i){

    soma += parseFloat(value.valor);
    
        listaProd.innerHTML += `
            <div class="lista-produtos-single">
                <h3>${value.nome}</h3>
                <h3 class="price-produto"><span>R$${value.valor}</span></h3>
                <span onclick="removerPos(${i})">[x]</span>
            </div>
        `;
    calcTotal();
})
}

function calcTotal(){
    let total = document.querySelector(".soma-produto h3");
    total.innerHTML = `Total: R$${soma.toFixed(2)}`
}

function removerPos(pos){
    //soma = soma - items.valor;
    items.splice(pos, 1);
    mostraProdutos();
    calcTotal();
}

document.querySelector('input[name=limpar]')
    .addEventListener('click', ()=> {
        limpaCarrinho();
})
function limpaCarrinho(){
    items = [];
    document.querySelector(".lista-produtos").innerHTML = "";
    document.querySelector(".soma-produto h3").innerHTML = "Total: R$0.00";
}