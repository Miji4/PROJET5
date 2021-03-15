fetch ("http://localhost:3000/api/cameras/")
.then (response=>response.json())
.then (response=>{
    showElement();
})

.catch (function (err) {
    console.log("error" + err);
});

// objet contact à envoyer au serveur
let contact = {
    firstName:'',
    lastName:'',
    address:'',
    city:'',
    email:'',
};

  
// fonction qui permet de recuperer le dernier element du localstorage et regrouper les memes cameras
function addCart (){ 
    showCart = [];
    for(let i = 0; i < products.length; i++) {  
        product = products[i];
        if(!showCart[product._id]) { 
            showCart[product._id] = []; 
        }
        showCart[product._id].push(product)
    }
    return showCart;
};


// Shopping cart table
function showElement(){
    let table = document.createElement('table');  
    table.className = "table";
    let thead = document.createElement('thead');
    table.appendChild(thead);
    cart.appendChild (table);

    let tr = document.createElement('tr');
    thead.appendChild(tr);

    let th = document.createElement('th');
    th.scope = "col";
    th.className = "border-0 bg-light";
    tr.appendChild(th);

    let div = document.createElement('div');
    div.className = "p-2 px-3 text-uppercase";
    div.innerHTML = "produit";
    th.appendChild(div);

    let th1 = document.createElement('th');
    th1.scope = "col";
    th1.className = "border-0 bg-light";
    tr.appendChild(th1);

    let div2 = document.createElement('div');
    div2.className = "py-2  text-uppercase";
    div2.innerHTML = "prix";
    th1.appendChild(div2);

    let th2 = document.createElement('th');
    th2.scope = "col";
    th2.className = "border-0 bg-light";
    tr.appendChild(th2);

    let div3 = document.createElement('div');
    div3.className = "py-2  text-uppercase";
    div3.innerHTML = "quantité";
    th2.appendChild(div3);

    let th3 = document.createElement('th');
    th3.scope = "col";
    th3.className = "border-0 bg-light";
    tr.appendChild(th3);

    let tbody= document.createElement('tbody')
    table.appendChild(tbody);

    // je fais appel a ma fonction addCart() pour afficher les cameras dans mon panier
    addCart ();

    // creation de la variable entries pour pouvoir parcourir mon tableau showCart
    entries = Object.entries(showCart);


    //fonction qui affiche le total
    function totalCart() {
        sum = 0;
        for(let i = 0; i<entries.length; i++){var b = entries[i][1].length; for(let j=0; j<b; j++)
        sum+= (entries[i][1][j].price)}				
        return sum;
    };

    // boucle qui parcours notre tableau pour afficher chaque cameras
    for(let i = 0; i<entries.length; i++){entries[i][1][0]; 

        let tr1 = document.createElement('tr');
        tbody.appendChild(tr1);

        let th4 = document.createElement('td');
        th4.scope = "row";
        th4.className = "border-0";
        tr1.appendChild(th4)

        let div5 = document.createElement('div');
        div5.className = "p-2";
        th4.appendChild(div5);

        let img = document.createElement('img');
        img.src = entries[i][1][0].image;
        img.alt = entries[i][1][0].name;
        img.className = "img-fluid rounded shadow-sm";
        img.width = "100";
        div5.appendChild (img);

        let div6 = document.createElement('div');
        div6.className="ml-3 d-inline-block align-middle";
        div5.appendChild(div6);

        let h5 = document.createElement('h5');
        h5.className="mb-0";
        div6.appendChild(h5);

        let a = document.createElement('a');
        a.className = "text-dark d-inline-block align-middle";
        a.href = 'produit.html?id='+ entries[i][1][0]._id;

        a.innerHTML = entries[i][1][0].name;
        h5.appendChild(a);
        
        // boucle pour afficher toutes les lentilles commandées
        var b = entries[i][1]; 
        for(let j=0; j<b.length; j++){
            let span = document.createElement('span');
            span.className = "text-muted font-weight-normal font-italic d-block";
            span.innerHTML = "lenses : " + entries[i][1][j].lenses ;
            div6.appendChild(span);
        };

        let td1 = document.createElement('td');
        td1.className = "border-0 align-middle";
        td1.id = "price";
        tr1.appendChild(td1);
        let strong = document.createElement('strong');
        strong.className = "price-unit";
        strong.value = entries[i][1][0].price;
        strong.innerHTML = entries[i][1][0].price + "€";
        td1.appendChild(strong);

        let td2 = document.createElement('td');
        td2.className = "border-0 align-middle";
        tr1.appendChild(td2);

        let strong1 = document.createElement('strong');
        strong1.className = "quantité";
        strong1.innerHTML = entries[i][1].length;
        td2.appendChild(strong1);
    };

    //summary
    let div7 = document.createElement('div');
    div7.className = "col-lg-10";
    display.appendChild(div7);

    let div8 = document.createElement('div');
    div8.className = "bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold";
    div8.innerHTML = "Récapitulatif de la commande";
    div7.appendChild(div8);

    let ul = document.createElement('ul');
    ul.className = "list-unstyled mb-4";
    div8.appendChild(ul);

    let li = document.createElement('li');
    li.className = "d-flex justify-content-between py-3 border-bottom";
    ul.appendChild(li);

    let strong2 = document.createElement('strong')
    strong2.className = "text-muted";
    strong2.innerHTML = "Total";
    li.appendChild(strong2);

    let total = document.createElement('h5');
    total.className = "font-weight-bold";
    total.innerHTML =totalCart() + " €" ;
    li.appendChild(total);

    let div9 = document.createElement('div');
    div9.className = "clear_continu"
    div8.appendChild(div9)

    let button1 = document.createElement('button');
    button1.id = "clear-cart";
    button1.innerHTML = "Vider mon panier";
    button1.addEventListener("click", clearCart)

    div9.appendChild(button1)

    let button2 = document.createElement('button');
    button2.id = "continu-shop";
    button2.innerHTML = "Continuer mes achats";

    div9.appendChild(button2)

    button2.addEventListener("click", function() { // redirection vers index.html pour continuer les achats
        location.href = 'index.html';
    });

    // function pour vider le panier 
    function clearCart(){
        localStorage.clear();
        alert("Votre panier est maintenant vide !")
        document.location.href = 'index.html'
    };

};


// création du formulaire de renseignement avec nom, prénom, adresse, ville et email 
let formValid = document.getElementById('ordre__validation');
let nom = document.getElementById('nom');
let prenom = document.getElementById('prenom');
let email = document.getElementById('mail');
let ville = document.getElementById('ville');
let address = document.getElementById('address');
let missNom = document.getElementById('missNom');
let missPrenom = document.getElementById('missPrenom');
let missEmail = document.getElementById('missEmail');
let missVille = document.getElementById('missVille');
let missAddress = document.getElementById('missAddress');
let nomValid = /^[a-zA-ZéèîïÉÈÎÏ][A-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/; // création de regex pour vérifier la pertinence des données saisie 
let prenomValid = /^[a-zA-ZéèîïÉÈÎÏ][A-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;
let emailValid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let villeValid = /^[a-zA-ZéèîïÉÈÎÏ][A-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;
let addressValid = /^\d+\s[A-z]+\s[A-z]+/;
            
formValid.addEventListener('click', validation); // validation si l'ensemble des données du formulaires sont ok 



function form(){
    //Si le champ nom est vide//
    if (nom.validity.valueMissing){
        missNom.textContent = 'Veuillez renseigner votre nom';
        missNom.style.color = 'red'; 
    //Si le format de données est incorrect//
    }else if(nomValid.test(nom.value) == false){
        missNom.textContent = 'Format incorrect';
        missNom.style.color = 'orange'; 
    }else{
        missNom.innerHTML = `<i class="fas fa-check"></i>`;
        missNom.style.color = 'green';
    };

    //Si le champ prenom est vide//
    if (prenom.validity.valueMissing){
        missPrenom.textContent = 'Veuillez renseigner votre prénom';
        missPrenom.style.color = 'red'; 
    //Si le format de données est incorrect//
    }else if (prenomValid.test(prenom.value) == false){
        missPrenom.textContent = 'Format incorrect';
        missPrenom.style.color = 'orange';  
    }else{
        missPrenom.innerHTML = `<i class="fas fa-check"></i>`
        missPrenom.style.color = 'green';
    };
    
    //Si le champ email est vide//
    if (email.validity.valueMissing){  
        missEmail.textContent = 'Veuillez renseigner votre e-mail';
        missEmail.style.color = 'red';   
        //Si le format de données est incorrect//
    }else if (emailValid.test(email.value) == false){
        missEmail.textContent = 'Format incorrect';
        missEmail.style.color = 'orange';  
    }else{
        missEmail.innerHTML = `<i class="fas fa-check"></i>`
        missEmail.style.color = 'green';
    };
   
    //Si le champ ville est vide//
    if (ville.validity.valueMissing){
        missVille.textContent = 'Veuillez renseigner votre commune';
        missVille.style.color = 'red';
        //Si le format de données est incorrect//
    }else if (villeValid.test(ville.value) == false){  
        missVille.textContent = 'Format incorrect';
        missVille.style.color = 'orange';   
    }else{
        missVille.innerHTML = `<i class="fas fa-check"></i>`
        missVille.style.color = 'green';
    };
   
    //Si le champ address est vide//
    if (address.validity.valueMissing){
        missAddress.textContent = 'Veuillez renseigner votre adresse';
        missAddress.style.color = 'red';        
    //Si le format de données est incorrect//
    }else if (addressValid.test(address.value) == false){
        missAddress.textContent = 'Format incorrect';
        missAddress.style.color = 'orange';  
    }else{
        missAddress.innerHTML = `<i class="fas fa-check"></i>`
        missAddress.style.color = 'green';
    }; 
};


    
    // si formulaire valid création de l'objet à envoyer au serveur pour créer la commande 
function validation(){

    form();

    if (nomValid.test(nom.value) === true && addressValid.test(address.value) === true && villeValid.test(ville.value) === true && emailValid.test(email.value) === true && prenomValid.test(prenom.value) === true) {
        contact.firstName = nom.value
        contact.lastName = prenom.value
        contact.email = email.value
        contact.city = ville.value
        contact.address = address.value
    }else{

        alert ("Veuillez renseigner tous les champs s'il vous plaît!");
        return false;
    }

    // creation du tableau qui va contenir les id des cameras
    let productsId = [];
    for(let i =0; i<products.length; i++){productsId.push(products[i]._id)}

    // creation de l objet a envoyer

    let objectToSend = {
        contact : contact,
        products : productsId,
    };

    // envoi au serveur

    fetch("http://localhost:3000/api/cameras/order", {
        method: 'POST',            
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(objectToSend) // conversion en JSON des données requis par le serveur 
    }).then(response => { response.json().then(function(json) {
            let orderId = json.orderId;
            document.location.href = 'confirmation.html?id=' + orderId;  // envoi de l'ID de la commande dans l'url de la page de validation 
        });
    }).catch(error => { // enregistrement si erreur lors de l'envoi de données 
            alert(error);
    })  
};

// fonction qui affiche le nombre d'artcile dans le panier
displayQty();
    


        
           