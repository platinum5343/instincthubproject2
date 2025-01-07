// ==================================
// 1. Toggle humbugger menu;
// By default, the .link tag should 
// display none.
// ==================================



const hamburger = document.querySelector('.hamburger');
const link = document.querySelector('.link')
const productTab = document.querySelector('.tabset')
const catalogue = document.querySelectorAll('.catalogue');
const percard = document.querySelectorAll('.percard')




hamburger.addEventListener('click', () =>{
    if(link.style.display === "none"){
        link.style.display = 'block';
    } else{
        link.style.display = "none"
    }
})

  



// ==================================
// 2. Display products based on 
// All, Men or Female categories.
// ==================================
// product.addEventListener('change', (e)=>{

// })





// ==================================
// 2. Display products based on 
// search keywords in the input fields.
// ==================================
// search.addEventListener('input', (e)=>{

// })

const displayPercard = (values) =>{
    percard.forEach(element =>{
        element.style.display = "none";
        const name = element.children[1].innerHTML.toUpperCase();
        const percent = element.children[2].innerHTML.toUpperCase();
        const figure = element.children[3].innerHTML.toUpperCase();

        if ( name.includes(values) || percent.includes(values) || figure.includes(values)){
            element.style = "block"
        }
    })
}

search_product.addEventListener('input', (e) => {
    displayPercard(e.target.value.toUpperCase())
})




// Get the product grid element
const productGrid = document.getElementById('product-grid');

// Sample product data
const products = [
  {
    id: 1,
    name: 'Unpaired Gray Nike Running Shoe',
    price: 200,
    category: 'Male',
    image: 'assets/images/products/1.jpg',
  },
  {
    id: 2,
    name: 'White tank top',
    price: 29,
    category: 'Female',
    image: 'assets/images/products/2.jpg',
  },
  {
    id: 3,
    name: 'Yellow and black bikini',
    price: 50,
    category: 'Female',
    image: 'assets/images/products/3.jpg',
  },
  {
    id: 4,
    name: 'White beach dress',
    price: 220,
    category: 'Female',
    image: 'assets/images/products/16.jpg',
  },
  {
    id: 5,
    name: 'White top and stunt',
    price: 250,
    category: 'Male',
    image: 'assets/images/products/4.jpg',
  },
  {
    id: 5,
    name: 'Main brown leather ',
    price: 100,
    category: 'Male',
    image: 'assets/images/products/5.jpg',
  },
  {
    id: 6,
    name: 'Pair of white-and-orange athletic shoes on white box',
    price: 90,
    category: 'Male',
    image: 'assets/images/products/6.jpg',
  },
  {
    id: 7,
    name: 'White Nike running shoes standing',
    price: 110,
    category: 'Male',
    image: 'assets/images/products/7.jpg',
  },
  {
    id: 8,
    name: 'Assorted-color shirt lot hang on rack',
    price: 500,
    category: 'Male',
    image: 'assets/images/products/8.jpg',
  },
  {
    id: 9,
    name: 'Red and white crew neck t-shirt and white pants',
    price: 90,
    category: 'Male',
    image: 'assets/images/products/9.jpg',
  },
  {
    id: 10,
    name: 'View the photo by Mojtaba Fahiminia',
    price: 240,
    category: 'Male',
    image: 'assets/images/products/10.jpg',
  },
  {
    id: 11,
    name: 'Orange and white headdres',
    price: 30,
    category: 'Female',
    image: 'assets/images/products/11.jpg',
  },
  {
    id: 12,
    name: 'White and blue nike air force 1 high',
    price: 300,
    category: 'Male',
    image: 'assets/images/products/12.jpg',
  },
  {
    id: 13,
    name: 'Blue jacket and a black pant',
    price: 270,
    category: 'Male',
    image: 'assets/images/products/13.jpg',
  },
  {
    id: 14,
    name: 'Black, white, and gray',
    price: 99,
    category: 'Female',
    image: 'assets/images/products/14.jpg',
  },
  {
    id: 15,
    name: 'Two black top',
    price: 95,
    category: 'Male',
    image: 'assets/images/products/15.jpg',
  },


  // Add more products here...
];

// Function to display products
function displayProducts(products) {
  const productHTML = products.map((product) => {
    return `
      <div class="percard catalogue">
        <a href="#">
          <img src="${product.image}" alt="Collection" />
          <span class="discount">-5%</span>
          <p>${product.name}</p>
          <h4><span class="price">$${product.price}</span><span class="tag">${product.category}</span></h4>
        </a>
      </div>
    `;
  }).join('');
  productGrid.innerHTML = productHTML;
}

// Display all products initially
displayProducts(products);

// Add event listener to radio buttons
const radioButtons = document.querySelectorAll('input[type="radio"]');
radioButtons.forEach((button) => {
  button.addEventListener('change', (e) => {
    const selectedCategory = e.target.value;
    const filteredProducts = products.filter((product) => {
      if (selectedCategory === 'All') {
        return true;
      }
      return product.category === selectedCategory;
    });
    displayProducts(filteredProducts);
  });
});






