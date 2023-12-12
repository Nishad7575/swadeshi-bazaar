//Filter buttons-------------------------------------------------------------------------------------------->
const allFilter = document.querySelector("#all-btn");
const mensFilter = document.querySelector("#mens-btn");
const womensFilter = document.querySelector("#womens-btn");
const jewelleryFilter = document.querySelector("#jewellery-btn");
const electronicsFilter = document.querySelector("#electronics-btn");

//different sections---------------------------------------------------------------------------------------->
const mensSection = document.querySelector("#mens-section");
const womensSection = document.querySelector("#womens-section");
const jewellerySection = document.querySelector("#jewellery-section");
const electronicsSection = document.querySelector("#electronics-section");
const searchSection = document.querySelector("#searched-section");

const search = document.querySelector("#searchBar");
const rangeBar=document.querySelector("#range")

const applyBtn=document.querySelector("#apply-btn")
const lowPrice=document.querySelector("#low")
const midPrice=document.querySelector("#mid")
const highPrice=document.querySelector("#high")
const vHighPrice=document.querySelector("#vHigh")



let men = []; 
let women = []; 
let jewelery = [];
let electronics = []; 
let response = [];
let myCartArray = []; 
let temp=JSON.parse(localStorage.getItem("cart"))
if(temp){
  myCartArray=temp
}
//fetching api---------------------------------------------------------------------------------------------->
fetchAPI("https://fakestoreapi.com/products");
async function fetchAPI(url) {
  try {
    let data = await fetch(url);
    console.log(data);
    response = await data.json();
    console.log(response);
 const staticItems = [
      {
        "id": 101,
        "title": "Door and wall Hanging",
        "price": 160,
        "description": "used for decoration",
        "category": "handcrafted",
        "image": "./images/torans.jpg",
        "rating": {
          "rate": 3.9,
          "count": 100
        }
      },
      {
        "id": 102,
        "title": "Decorating pot",
        "price": 150,
        "description": "used for decoration",
        "category": "Handcrafted",
        "image": "./images/pot.jpg",
        "rating": {
          "rate": 4.1,
          "count": 259
        }
      },
      {
        "id": 103,
        "title": "Embroidery Gift Card",
        "price": 1500,
        "description": "wedding Gift",
        "category": "Handcrafted",
        "image": "./images/gift.jpg",
        "rating": {
          "rate": 4.1,
          "count": 259
        }
      },
      {
        "id": 104,
        "title": "Wooden Toy",
        "price": 600,
        "description": "kids toys",
        "category": "Handcrafted",
        "image": "./images/toy.jpg",
        "rating": {
          "rate": 4.1,
          "count": 259
        }
      },
      {
        "id": 105,
        "title": "Flower Pot",
        "price": 450,
        "description": "Decoration",
        "category": "Handcrafted",
        "image": "./images/fpot.jpg",
        "rating": {
          "rate": 4.1,
          "count": 259
        }
      },
      {
        "id": 106,
        "title": "Bomboo,jute rope chair",
        "price": 3560,
        "description": "",
        "category": "Handcrafted",
        "image": "./images/stool.jpg",
        "rating": {
          "rate": 4.1,
          "count": 259
        }
      },
      {
        "id": 107,
        "title": "Macrame mirror",
        "price": 890,
        "description": " to see face",
        "category": "Handcrafted",
        "image": "./images/macrame.webp",
        "rating": {
          "rate": 4.1,
          "count": 259
        }
      },
      {
        "id": 108,
        "title": "candle stand",
        "price": 200,
        "description": "eco-friendly ",
        "category": "Handcrafted",
        "image": "./images/lamp.webp",
        "rating": {
          "rate": 4.1,
          "count": 259
        }
      },
    ];
    // men = response.filter((item) => {
    //   return item.category == "men's clothing";
    // });
    // console.log(men);
men=staticItems ;
    // jewelery = response.filter((item) => {
    //   return item.category == "jewelery";
    // });
  //   // console.log(jewelery);
   
  const staticItems2 = [ {
    "id": 101,
    "title": "Necklace",
    "price": 155,
    "description": "beauty product",
    "category": "jewelery",
    "image": "./images/necklace.jpg",
    "rating": {
      "rate": 3.9,
      "count": 100
    }
  },
  {
    "id": 102,
    "title": "Ring",
    "price": 160,
    "description": "beauty product",
    "category":"jewelery",
    "image": "./images/456.webp",
    "rating": {
      "rate": 4.1,
      "count": 259
    }
  },
  {
    "id": 103,
    "title": "Thread Bangles",
    "price": 500,
    "description": "beauty product",
    "category": "jewelery",
    "image": "./images/c.jpg",
    "rating": {
      "rate": 4.1,
      "count": 259
    }
  },
  {
    "id": 104,
    "title": "Earing",
    "price": 120,
    "description": "beauty product",
    "category": "jewelery",
    "image": "./images/earing.jpg",
    "rating": {
      "rate": 4.1,
      "count": 259
    }
  },
  {
    "id": 105,
    "title": "Anklet ",
    "price": 70,
    "description": "beauty product",
    "category": "jewelery",
    "image": "./images/Anklet.webp",
    "rating": {
      "rate": 4.1,
      "count": 259
    }
  },
  {
    "id": 106,
    "title": "Sea shell cowrie necklace",
    "price":700 ,
    "description": "beauty product",
    "category": "jewelery",
    "image": "./images/nset.webp",
    "rating": {
      "rate": 4.1,
      "count": 259
    }
  },
  {
    "id": 107,
    "title": "Bracelet",
    "price": 220,
    "description": " beauty product",
    "category": "jewelery",
    "image": "./images/pearl.webp",
    "rating": {
      "rate": 4.1,
      "count": 259
    }
  },
  {
    "id": 108,
    "title": "Hair Accessories ",
    "price": 100,
    "description": "Beauty product",
    "category": "jewelery",
    "image": "./images/rose.webp",
    "rating": {
      "rate": 4.1,
      "count": 259
    }
  },
];
jewelery=staticItems2 ;
      

//  electronics = response.filter((item) => {
//     return item.category == "electronics";
//   });
//   console.log(electronics); 
const staticItems3 = [ {
    "id": 101,
    "title": "Sweater for girls ",
    "price": 1350,
    "description": "cloths ",
    "category": "clothing",
    "image": "./images/sweater.jpg",
    "rating": {
      "rate": 3.9,
      "count": 100
    }
  },
  {
    "id": 102,
    "title": "Sandal",
    "price": 880,
    "description": "sandal",
    "category":"footwear",
    "image": "./images/xxx.jpg",
    "rating": {
      "rate": 4.1,
      "count": 259
    }
  },
  {
    "id": 103,
    "title": "Suit ",
    "price": 2000,
    "description": "cloths",
    "category": "cloths",
    "image": "./images/AA.webp",
    "rating": {
      "rate": 4.1,
      "count": 259
    }
  },
  {
    "id": 104,
    "title": "Lehenga",
    "price":900 ,
    "description": "cloths",
    "category": "cloths",
    "image": "./images/LLL.webp",
    "rating": {
      "rate": 4.1,
      "count": 259
    }
  },
  {
    "id": 105,
    "title": "Kurta",
    "price": 555,
    "description": "clothing",
    "category": "cloths",
    "image": "./images/mkurta.webp",
    "rating": {
      "rate": 4.1,
      "count": 259
    }
  },
  {
    "id": 106,
    "title": "leather man casual juti",
    "price":2500,
    "description": "footwaer",
    "category": "clothing",
    "image": "./images/mjuti.webp",
    "rating": {
      "rate": 4.1,
      "count": 259
    }
  },
  {
    "id": 107,
    "title": "Handmade Woodwn Watch ",
    "price":2500,
    "description": "watch",
    "category": "watch",
    "image": "./images/watch.jpg",
    "rating": {
      "rate": 4.1,
      "count": 259
    }
  },
  {
    "id": 108,
    "title": " Shirt",
    "price":5000,
    "description": "700",
    "category": "cloths",
    "image": "./images/shirt.jpg",
    "rating": {
      "rate": 4.1,
      "count": 259
    }
  },
];
electronics=staticItems3 ;
      

  // women = response.filter((item) => {
  //   return item.category == "women's clothing";
  // });
  // console.log(women);
  const staticItems4 = [ {
    "id": 101,
    "title": "Wheat Flour ",
    "price": 150,
    "description": " food",
    "category": "food product",
    "image": "./images/aata.jpg",
    "rating": {
      "rate": 3.9,
      "count": 100
    }
  },
  {
    "id": 102,
    "title": "GHee",
    "price": 1200,
    "description": "food",
    "category":"food product",
    "image": "./images/ghee.webp",
    "rating": {
      "rate": 4.1,
      "count": 259
    }
  },
  {
    "id": 103,
    "title": "Honey",
    "price": 200,
    "description": "food",
    "category": "food product",
    "image": "./images/Honey.jpg",
    "rating": {
      "rate": 4.1,
      "count": 259
    }
  },
  {
    "id": 104,
    "title": " collection of all type of spices",
    "price":7860 ,
    "description": "food",
    "category": "food product",
    "image": "./images/spices.jpg",
    "rating": {
      "rate": 4.1,
      "count": 259
    }
  },
  {
    "id": 105,
    "title": " Makhana pack",
    "price":456 ,
    "description": "food",
    "category": "food product",
    "image": "./images/makhana.jpg",
    "rating": {
      "rate": 4.1,
      "count": 259
    }
  },
  {
    "id": 106,
    "title": "Herbal Tea",
    "price": 135,
    "description": "food",
    "category": "food product",
    "image": "./images/tea.jpg",
    "rating": {
      "rate": 4.1,
      "count": 259
    }
  },
  {
    "id": 107,
    "title": "Swadeshi sweets",
    "price":678 ,
    "description": "food products",
    "category": "food",
    "image": "./images/sweets.webp",
    "rating": {
      "rate": 4.1,
      "count": 259
    }
  },
  {
    "id": 108,
    "title": " Dry Fruits",
    "price":4000,
    "description": "food",
    "category": "food products",
    "image": "./images/dryfruits.webp",
    "rating": {
      "rate": 4.1,
      "count": 259
    }
  },
];
women=staticItems4 ;
        
    showAll();
  } catch (error) {
    console.log("error-msg" + error);
  }
}

//add to cart function-------------------------------------------------------------------------------------->
function addToCart(itemId) {
  let temp = response.filter((item) => {
    return item.id == itemId;
  });
  
  myCartArray.push(temp[0]);
  localStorage.setItem("cart", JSON.stringify(myCartArray));
}

//allFilter function---------------------------------------------------------------------------------------->
allFilter.addEventListener("click", showAll);
function showAll() {
  allFilter.classList.add("active");
  searchSection.classList.add("hide-class");

  const allSections = [
    mensSection,
    womensSection,
    jewellerySection,
    electronicsSection,
  ];
  allSections.forEach((section) => section.classList.remove("hide-class"));

  const allFilters = [
    mensFilter,
    womensFilter,
    jewelleryFilter,
    electronicsFilter,
  ];
  allFilters.forEach((section) => section.classList.remove("active"));

  const myHTML_1 = men.map((item) => {
    return renderItems(item);
  });
  document.getElementById("mens-items").innerHTML = myHTML_1.join("");

  const myHTML_2 = women.map((item) => {
    return renderItems(item);
  });
  document.getElementById("womens-items").innerHTML = myHTML_2.join("");

  const myHTML_3 = jewelery.map((item) => {
    return renderItems(item);
  });
  document.getElementById("jewellery-items").innerHTML = myHTML_3.join("");

  const myHTML_4 = electronics.map((item) => {
    return renderItems(item);
  });
  document.getElementById("electronics-items").innerHTML = myHTML_4.join("");
}

//mensFilter function--------------------------------------------------------------------------------------->
mensFilter.addEventListener("click", showMensClothings);
function showMensClothings() {
  mensSection.classList.remove("hide-class");
  mensFilter.classList.add("active");

  const allSections = [womensSection, jewellerySection, electronicsSection];
  allSections.forEach((section) => section.classList.add("hide-class"));

  const allFilters = [
    allFilter,
    womensFilter,
    jewelleryFilter,
    electronicsFilter,
  ];
  allFilters.forEach((section) => section.classList.remove("active"));

  const myHTML = men.map((item) => {
    return renderItems(item);
  });
  document.getElementById("mens-items").innerHTML = myHTML.join("");
}

//womesFilter function-------------------------------------------------------------------------------------->
womensFilter.addEventListener("click", showWomensClothings);
function showWomensClothings() {
  womensSection.classList.remove("hide-class");
  womensFilter.classList.add("active");

  const allSections = [mensSection, jewellerySection, electronicsSection];
  allSections.forEach((section) => section.classList.add("hide-class"));

  const allFilters = [
    allFilter,
    mensFilter,
    jewelleryFilter,
    electronicsFilter,
  ];
  allFilters.forEach((section) => section.classList.remove("active"));

  const myHTML = women.map((item) => {
    return renderItems(item);
  });
  document.getElementById("womens-items").innerHTML = myHTML.join("");
}

//jewelleryFilter function---------------------------------------------------------------------------------->
jewelleryFilter.addEventListener("click", showJewellery);
function showJewellery() {
  jewellerySection.classList.remove("hide-class");
  jewelleryFilter.classList.add("active");

  const allSections = [mensSection, womensSection, electronicsSection];
  allSections.forEach((section) => section.classList.add("hide-class"));

  const allFilters = [allFilter, mensFilter, womensFilter, electronicsFilter];
  allFilters.forEach((section) => section.classList.remove("active"));

  const myHTML = jewelery.map((item) => {
    return renderItems(item);
  });
  document.getElementById("jewellery-items").innerHTML = myHTML.join("");
}

//electronicsFilter function---------------------------------------------------------------------------------->
electronicsFilter.addEventListener("click", showElectronics);
function showElectronics() {
  electronicsSection.classList.remove("hide-class");
  electronicsFilter.classList.add("active");

  const allSections = [mensSection, jewellerySection, womensSection];
  allSections.forEach((section) => section.classList.add("hide-class"));

  const allFilters = [allFilter, mensFilter, jewelleryFilter, womensFilter];
  allFilters.forEach((section) => section.classList.remove("active"));

  const myHTML = electronics.map((item) => {
    return renderItems(item);
  });
  document.getElementById("electronics-items").innerHTML = myHTML.join("");
}

//search function------------------------------------------------------------------------------------------->
search.addEventListener("input", searchItems);
function searchItems() {
  const searchTerm = search.value.toLowerCase().trim();
  let searchResults = response.filter((item) =>
    item.title.toLowerCase().includes(searchTerm)
  );

  const allSections = [
    mensSection,
    womensSection,
    jewellerySection,
    electronicsSection,
  ];
  allSections.forEach((section) => section.classList.add("hide-class"));

  const allFilters = [
    allFilter,
    mensFilter,
    womensFilter,
    jewelleryFilter,
    electronicsFilter,
  ];
  allFilters.forEach((section) => section.classList.remove("active"));
  
  
console.log(searchResults)


  if (searchTerm !== "") {
   
    const searchHTML = searchResults.map((item) => renderItems(item));
    document.getElementById("searched-items").innerHTML = searchHTML.join("");
    searchSection.classList.remove("hide-class");
  } else {
    document.getElementById("searched-items").innerHTML = "No items found";
    // document.getElementById("searched-section").classList.add("hide-class");
  }
  if(searchResults.length==0){
    document.getElementById("searched-items").innerHTML = "No items found";
  
    }
}

//render function------------------------------------------------------------------------------------------->
function renderItems(item) {
   //  <div class="title">${item.title}</div>  after div class info
  return `
 <div class="item">
 <div id="img-div">
 <img src=${item.image} alt="Item" />
 </div>
   <div class="info" id="info-div">
   <div class="title">${item.title.slice(0,42)}...</div>
   <div class="row">
     <div class="price">₹${item.price}</div>
     <div class="sized">S,M,L</div>
   </div>
   <div class="colors">
     Colors:
     <div class="row">
       <div class="circle" style="background-color: red"></div>
       <div class="circle" style="background-color: blue"></div>
       <div class="circle" style="background-color: green"></div>
     </div>
   </div>
   <div class="row">Rating: ${item.rating.rate}⭐</div>
 </div>
  <div id="btn-div">
 <button id="addBtn" onclick="addToCart(${item.id})">Add to Cart</button>
 </div>
</div>`;
}

//function for the range bar--------------------------------------->
rangeBar.addEventListener("input", applyRatingFilter)
function applyRatingFilter(){
  const ratingValue = rangeBar.value
  let ratingResults = response.filter((item) =>{
    return Math.floor(item.rating.rate)==(ratingValue)

  } );
  const searchHTML = ratingResults.map((item) => renderItems(item));
  document.getElementById("searched-items").innerHTML = searchHTML.join("");
  searchSection.classList.remove("hide-class");
}

//function for  filtering according ti price--------------------------------->
applyBtn.addEventListener("click",filterPrice)
function filterPrice(){
  let resultsArr=[]
  if(lowPrice.checked==true){
    
    let temp=response.filter((item)=>{
      return item.price<=25.0
    })
    
   temp.forEach((item)=>{
    resultsArr.push(item)
   })
   
  }
  if(midPrice.checked==true){
    
    let temp=response.filter((item)=>{
      return item.price>=25.0 && item.price<=50.0
    })
    
   temp.forEach((item)=>{
    resultsArr.push(item)
   })
   
  }
  if(highPrice.checked==true){
    
    let temp=response.filter((item)=>{
      return item.price>=50.0 && item.price<=100.0
    })
    
   temp.forEach((item)=>{
    resultsArr.push(item)
   })
   
  }
  if(vHighPrice.checked==true){
    
    let temp=response.filter((item)=>{
      return item.price>=100.0
    })
    
   temp.forEach((item)=>{
    resultsArr.push(item)
   })
   
  }
 
  const searchHTML = resultsArr.map((item) => renderItems(item));
  document.getElementById("searched-items").innerHTML = searchHTML.join("");
  searchSection.classList.remove("hide-class");
  
  if(lowPrice.checked==false && midPrice.checked==false && highPrice.checked==false && vHighPrice.checked==false){
    document.getElementById("searched-items").innerHTML =""
    searchSection.classList.add("hide-class");

  }
  }
      
