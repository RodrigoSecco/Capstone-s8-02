
const seccao = document.getElementById("vitrine")

const lista = document.createElement("ul")

lista.className = "products-content"

seccao.appendChild(lista)

createCard()

function createCard(){
   for(let i = 0; i<data.length; i++){
    
    const item1 = document.createElement("li")
    const imagem1 = document.createElement("img")
    const mainItem1 = document.createElement("main")
    const h2Item1 = document.createElement("h2")
    const h3Item1 = document.createElement("h3")
    const pItem1 = document.createElement("p")
    const strongItem1 = document.createElement("strong")
    const botaoItem1 = document.createElement("button")

    lista.appendChild(item1)   
    item1.className = "product"  
    item1.appendChild(imagem1) 
    imagem1.src = data[i].img   
    item1.appendChild(mainItem1)   
    mainItem1.className = "info"  
    mainItem1.appendChild(h2Item1)   
    h2Item1.innerText = data[i].tag   
    mainItem1.appendChild(h3Item1)   
    h3Item1.innerText = data[i].nameItem   
    mainItem1.appendChild(pItem1) 
    pItem1.innerText = data[i].description   
    mainItem1.appendChild(strongItem1)    
    strongItem1.innerText = "R$ " + data[i].value
    mainItem1.appendChild(botaoItem1)    
    botaoItem1.className = "adicionar"    
    botaoItem1.innerText = data[i].addCart   
    botaoItem1.onclick = "increment()"
   }
}

//carrinho

const carrinho = document.querySelector(".carrinho2")
const lista2 = document.createElement("ul")
carrinho.appendChild(lista2)



seccao.addEventListener("click",function(){
    const adicionado = document.createElement("li")
    const imagem2 = document.createElement("img")
    const divItem = document.createElement("div")
    const h3Item2 = document.createElement("h3")
    const strongItem2 = document.createElement("strong")
    const botaoItem2 = document.createElement("button")

    adicionado.appendChild(imagem2)
    adicionado.appendChild(divItem)
    divItem.appendChild(h3Item2)
    divItem.appendChild(strongItem2)
    divItem.appendChild(botaoItem2)

    imagem2.src = data[0].img
    h3Item2.innerText = data[0].nameItem
    strongItem2.innerText = data[0].value

})

let listaCompra = []








