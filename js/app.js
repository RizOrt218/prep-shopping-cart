window.onload = function(){
	var arrayItems = [
  { "name": "Lusicious Jello Mix", "description": ["Very Elegant", "Trending item", "Come in Purple"], "price": 80.65 },
  { "name": "Tarnished Standing Desk", "description": ["Modular", "Works for both Tall and Loud People", "Smells like Productivity"], "price": 1654.99},
  { "name": "Hand-made Hand Grenades", "description": ["Such gift!", "Much boom!", "Very safe for kids"], "price": 10.44},
  { "name": "Pan-fried Cookie Dough", "description": ["Chocolate", "Family-size", "Hot Mess"], "price": 16.99 },
  { "name": "Fancy Dress Hanger", "description": ["Keep organized", "On Sale"], "price": 67.32 },
  { "name": "Snarky Britsh Mustache 3-Pack", "description": ["Sharing is caring!", "Hugs not drugs", "As seen on 'So You Think You Can Dance - Nigeria!'"], "price": 1.99 },
];
  
 

  function getObject(arrs){

    // var divBody = document.createElement('div');
    // divBody.id = 'divName';
    // document.body.appendChild(divBody);

    // var parBody = document.createElement('p');
    // parBody.id = 'parDes';
    // document.body.appendChild(parBody);

    var cart = document.getElementById('container');

    for(var i=0; i<arrs.length; i++){ //loop through arrayItems
      console.log(arrs[i].name);
      var itemName = document.createElement('h3');
      itemName.id = 'headName';
      itemName.innerHTML = arrs[i].name;
      cart.appendChild(itemName);

      console.log(arrs[i].description);
      var itemDes = document.createElement('p');
      itemDes.innerHTML = arrs[i].description;
      cart.appendChild(itemDes);

      console.log(arrs[i].price);
      var itemPrice = document.createElement('p');
      itemPrice.innerHTML = arrs[i].price;
      cart.appendChild(itemPrice);
    }
  }
  getObject(arrayItems);
};
