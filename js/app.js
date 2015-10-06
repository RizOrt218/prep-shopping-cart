window.onload = function(){
	var arrayItems = [
  { "name": "Lusicious Jello Mix", "description": ["Very Elegant", "Trending item", "Come in Purple"], "price": 80.65 },
  { "name": "Tarnished Standing Desk", "description": ["Modular", "Works for both Tall and Loud People", "Smells like Productivity"], "price": 1654.99},
  { "name": "Hand-made Hand Grenades", "description": ["Such gift!", "Much boom!", "Very safe for kids"], "price": 10.44},
  { "name": "Pan-fried Cookie Dough", "description": ["Chocolate", "Family-size", "Hot Mess"], "price": 16.99 },
  { "name": "Fancy Dress Hanger", "description": ["Keep organized", "On Sale"], "price": 67.32 },
  { "name": "Snarky Britsh Mustache 3-Pack", "description": ["Sharing is caring!", "Hugs not drugs", "As seen on 'So You Think You Can Dance - Nigeria!'"], "price": 1.99 },
];


	function addElement(arr){


     var cart = document.getElementById('cart1');
     // console.log(cart);

		for (var i=0; i<arr.length; i++){ //loop through array
      console.log(arr[i].name); //prints objects in arrayItems
      var itemName = document.createElement('div'); //created a div in DOM
      itemName.innerHTML = arr[i].name; 
      cart.appendChild(itemName); //

      console.log(arr[i].description);
      var itemDes = document.createElement('')

	}
}; 
addElement(arrayItems);
};
