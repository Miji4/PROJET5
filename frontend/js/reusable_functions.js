let products = JSON.parse(localStorage.getItem('products'));

// fonction qui utilise la longueur du tableau de notre localstorage pour afficher le nombre d article dans notre panier
function displayQty(){
    let quantityInCart = document.getElementById('checkout_items');
    if(products === null){
        quantityInCart.innerHTML = '0';
    }else{
        quantityInCart.innerHTML = products.length;
    }    
    return quantityInCart;
}; 


