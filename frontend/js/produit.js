// fetch url
fetch ("http://localhost:3000/api/cameras/" + location.search.split('=')[1] )
.then (response=>response.json())
.then(camera=>{
    viewCamera(camera);
})

.catch (function (err) {
    console.log("error" + err);
  });

  
// function storeCamera(camera) { 
//   window.selectedCamera = camera;
// }


function getSelectedLens() { // fonction qui permet de selectionner la lentilles 
  return lens.value;
}

// fonction qui affiche la fiche produit
function viewCamera(camera) {

  let newDiv = document.createElement('div');
  newDiv.className = 'card';

  cameraElement.appendChild(newDiv);

  let img = document.createElement('img');
  img.className = 'card-img-top';
  img.src = camera.imageUrl;
  img.alt = camera.name;

  newDiv.appendChild(img);

  let div1 = document.createElement('div');
  div1.className = 'card-body';

  let h5 = document.createElement('h5');
  h5.className = 'card-title';
  h5.innerHTML = camera.name;

  div1.appendChild(h5);

  let p = document.createElement('p');
  p.className = 'card-text';
  p.innerHTML = camera.description;

  div1.appendChild(p);

  let select = document.createElement('select');
  select.className = 'custom-select custom-select-sm';
  select.id = 'lens';

  div1.appendChild(select);

  // boucle pour afficher les différentes lentilles
  for (let i = 0; i < camera.lenses.length; i++) {
    let option = document.createElement('option');
    option.value = camera.lenses[i];
    option.text = camera.lenses[i];
    select.appendChild(option);
  }

  newDiv.appendChild(div1);

  let button = document.createElement('button');
  button.setAttribute = 'type', 'submit';
  button.id = 'btnAddCart'
  button.className = 'btn btn-primary';
  button.innerHTML = 'Ajouter au panier';

  newDiv.appendChild(button);

  button.addEventListener('click', addProduct) 
  
  function addProduct(){ // fonction pour ajouter le produit au localstorage

    let products = []; 
    if (getSelectedLens()) {
      if(localStorage.getItem('products')) {
        products = JSON.parse(localStorage.getItem('products')); 
      }

      products.push({_id : camera._id, image : camera.imageUrl, name : camera.name, lenses : lens.value, price : camera.price/100 });
      localStorage.setItem('products', JSON.stringify(products));
      localStorage.getItem('products');
      alert('Ajouté au panier !');
      window.location.reload();
    } 
  };

};

displayQty();









  



 

