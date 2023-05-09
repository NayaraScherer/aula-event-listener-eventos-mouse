let quantidadeSubtotal = document.getElementById("quantidade-subtotal");
let valorSubtotal = document.getElementById("valor-subtotal");

let subtotalInfo = {
  quantidade: 1,
  valor: 11.66,
};

quantidadeSubtotal.innerText = subtotalInfo.quantidade + " itens";
valorSubtotal.innerText = subtotalInfo.valor;

const addButton = document.getElementById("btn-adicionar-produto-01");
const input = document.getElementById("quantidade-produto-01")
const subButton = document.getElementById("btn-subtrair-produto-01")

function updateSubtotal(quantidadeItens){
  quantidadeSubtotal.innerText = `${quantidadeItens} itens`;
  valorSubtotal.innerText = (subtotalInfo.valor*quantidadeItens).toFixed(2);
}

function itensAdd() {
  input.value = Number (input.value) + 1;

  updateSubtotal(input.value);
};



function intensRemuve() {
  if (input.value > 1){
    input.value= Number(input.value) -1;
    updateSubtotal(input.value);
  } 
};

addButton.addEventListener("click", () => itensAdd())
subButton.addEventListener("click", () => intensRemuve())