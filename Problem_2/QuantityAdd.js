
/*2. you need to write a function say, getUniquePrducts which should return an array of objects by grouping the products based on the productName and summing up the quantity for the same products present in the given list of Products considering Product Name as Key.

Sample Output for the given listOfProducts will be :

[{
    productName: "TV",
    quantity: 20,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 10,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
     description: "Ceiling Fan"
  }
]

*/

let getUniqueProducts = (products) => {
 

  let bag = [];
  for (let i = 0; i < products.length; i++){
   
    if (bag.length==0) {
      bag.push(products[i])
    }
   
    else {
      let flag = false;
      for (let j = 0; j < bag.length; j++) {
        if (bag[j].productName == products[i].productName) {
          bag[j].quantity += products[i].quantity;
         flag = true;
          break;
        }
        else {
         flag = false;
        }
      }

      if (flag == false) {
        bag.push(products[i])
      }
    
  }

  }

  console.log(bag)
 
} 


const listOfProducts = [{
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan"
  }
 
];

getUniqueProducts(listOfProducts)