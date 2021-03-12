// fetch url

fetch("http://localhost:3000/api/cameras")
.then(response => response.json())
.then(cameras => { 
  addElement(cameras);
})
.catch (function (err) {
    console.log("error" + err);
  });   
  


// fonction pour afficher les cameras 
function addElement(cameras){
  for (i=0; i<cameras.length; i++){   // boucle for pour parcourir toutes les cameras

    let newDiv = document.createElement('div');
    newDiv.className= ("card-group","card");
    
    let div = document.createElement('div');
    div.className='card';
    let img = document.createElement('img');
    img.className='card-img-top';
    img.alt= cameras[i].name;
    img.src=cameras[i].imageUrl;

    div.appendChild(img);

    newDiv.appendChild(div);
    items.appendChild(newDiv);

    let div1 = document.createElement('div');
    div1.className='card text-center';

    let h5 = document.createElement('h5');
    h5.className ='card-title';
    h5.innerHTML =cameras[i].name;
    let p=document.createElement('p');
    p.className ='card-text';
    p.innerHTML =(cameras[i].price / 100 + ' €');

    let p1=document.createElement('p');
    p1.className='btn';
    p1.setAttribute=('type','button');

    let a = document.createElement('a');
    a.className='text-muted';
    a.href='produit.html?id='+ cameras[i]._id;
    a.innerHTML='voir cet article !';

    p1.appendChild(a);

    div1.appendChild(h5);
    div1.appendChild(p);
    div1.appendChild(p1);

    newDiv.appendChild(div1);
  }
};

// fonction qui affiche le nombre d'article dans le panier
displayQty();



  

    
          
    
     



  