window.onload = function(){
	var arrayItems = [
  { "name": "Lusicious Jello Mix", "description": ["Very Elegant", " Trending item", " Come in Purple"], "price": 80.65 },
  { "name": "Tarnished Standing Desk", "description": ["Modular", " Works for both Tall and Loud People", " Smells like Productivity "], "price": 1654.99},
  { "name": "Hand-made Hand Grenades", "description": ["Such gift!", " Much boom!", " Very safe for kids"], "price": 10.44},
  { "name": "Pan-fried Cookie Dough", "description": ["Chocolate", " Family-size", " Hot Mess"], "price": 16.99 },
  { "name": "Fancy Dress Hanger", "description": ["Keep organized", " On Sale"], "price": 67.32 },
  { "name": "Snarky Britsh Mustache 3-Pack", "description": ["Sharing is caring!", " Hugs not drugs", " As seen on 'So You Think You Can Dance - Nigeria!'"], "price": 1.99 },
];
  
 

  function getObject(arrs){

    var cart = document.getElementById('container');



    for(var i=0; i<arrs.length; i++){                    //loop through arrayItems

      //created each array a div
      var cartDiv = document.createElement('div');
      cartDiv.id = 'arrayDiv';
      cart.appendChild(cartDiv);

      //created element for object 'name'
      console.log(arrs[i].name);
      var itemName = document.createElement('h3');
      itemName.id = 'headName';
      itemName.innerHTML = arrs[i].name;
      cartDiv.appendChild(itemName);

      //created element for object 'description'
      console.log(arrs[i].description);
      var itemDes = document.createElement('p');
      itemDes.id = 'itemDescription';
      itemDes.innerHTML = arrs[i].description;
      cartDiv.appendChild(itemDes);

      //created element for object 'price'
      console.log(arrs[i].price);
      var itemPrice = document.createElement('p');
      itemPrice.id = 'priceTag';
      itemPrice.innerHTML = arrs[i].price;
      cartDiv.appendChild(itemPrice);

    }
  }
  getObject(arrayItems);
};
