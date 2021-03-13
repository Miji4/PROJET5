// recupération de l'id pour le numéro de commande
let id = location.search.split('=')[1];
let numeroCde = id.split('-')[0];

// function totalCommande
function totalCommande(){
    sumTotal = 0; 
    for(let i =0; i<products.length; i++){
        sumTotal += products[i].price;
    }

    return sumTotal
};


// fonction qui affiche l'identifiant et le total
function showOrder (){
    let idOrder = document.getElementById('orderId');
    idOrder.innerHTML = numeroCde;
    let article = document.getElementById('nbrarticle');
    article.innerHTML = "  (" + products.length + ") ";
    let totalCde = document.getElementsByClassName('totalCde');
    totalCde[0].innerHTML = totalCommande() + " €";
    totalCde[1].innerHTML = totalCommande() + " €";
    
};

showOrder();

localStorage.clear();


