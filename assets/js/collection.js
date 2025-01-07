
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



// Get the filter options and product grid elements
const categoryFilter = document.getElementById('category-filter');
const priceFilter = document.getElementById('price-filter');
const sizeFilter = document.getElementById('size-filter');
const productGrid = document.querySelector('.product-gridcollection');

// Sample product data
const products = [
  {
    id: 1,
    name: 'Product 1',
    price: 19.99,
    category: 'tops',
    size: 'xs',
    image: 'assets/images/products/11.jpg',
  },
  {
    id: 2,
    name: 'Product 2',
    price: 29.99,
    category: 'bottoms',
    size: 's',
    image: 'assets/images/products/1.jpg',
  },
  {
    id: 2,
    name: 'White tank top',
    price: 29,
    category: 'tops',
size: 'm',
    image: 'assets/images/products/2.jpg',
  },
  {
    id: 3,
    name: 'Yellow and black bikini',
    price: 50,
size: 'l',
    category: 'outwears',
    image: 'assets/images/products/3.jpg',
  },
  {
    id: 4,
    name: 'White beach dress',
    price: 220,
size: 'xl',
    category: 'dresses',
    image: 'assets/images/products/16.jpg',
  },
  {
    id: 5,
    name: 'White top and stunt',
    price: 250,
size: 's',
    category: 'tops',
    image: 'assets/images/products/4.jpg',
  },
  {
    id: 5,
    name: 'Main brown leather ',
    price: 100,
size: 'xs',
    category: 'tops',
    image: 'assets/images/products/5.jpg',
  },
  {
    id: 6,
    name: 'Pair of white-and-orange athletic shoes on white box',
    price: 90,
size: 'm',
    category: 'outwears',
    image: 'assets/images/products/6.jpg',
  },
  {
    id: 7,
    name: 'White Nike running shoes standing',
    price: 110,
size: 'l',
    category: 'outwears',
    image: 'assets/images/products/7.jpg',
  },
  {
    id: 8,
    name: 'Assorted-color shirt lot hang on rack',
    price: 500,
    size: 'xl',
    category: 'tops',
    image: 'assets/images/products/8.jpg',
  },
  {
    id: 9,
    name: 'Red and white crew neck t-shirt and white pants',
    price: 90,
size: 's',
    category: 'bottoms',
    image: 'assets/images/products/9.jpg',
  },
  {
    id: 10,
    name: 'View the photo by Mojtaba Fahiminia',
    price: 240,
size: 'xs',
    category: 'outwears',
    image: 'assets/images/products/10.jpg',
  },
  {
    id: 11,
    name: 'Orange and white headdres',
    price: 30,
size: 'm',
    category: 'outwears',
    image: 'assets/images/products/11.jpg',
  },
  {
    id: 12,
    name: 'White and blue nike air force 1 high',
    price: 300,
size: 'x',
    category: 'outwears',
    image: 'assets/images/products/12.jpg',
  },
  {
    id: 13,
    name: 'Blue jacket and a black pant',
    price: 270,
size: 'xl',
    category: 'bottoms',
    image: 'assets/images/products/13.jpg',
  },
  {
    id: 14,
    name: 'Black, white, and gray',
    price: 99,
    size: 's',
    category: 'bottoms',
    image: 'assets/images/products/14.jpg',
  },
  {
    id: 15,
    name: 'Two black top',
    price: 95,
    size: 'xs',
    category: 'tops',
    image: 'assets/images/products/15.jpg',
  },


  // Add more products here...
];

// Function to display products
function displayProducts(products) {
  const productHTML = products.map((product) => {
    return `
      <div class="product">
      
        <img src="${product.image}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p>Category: ${product.category}</p>
        <p>Size: ${product.size}</p>
        <p class="price">$${product.price}</p>
       
      </div>
    `;
  }).join('');
  productGrid.innerHTML = productHTML;
}

// Display all products initially
displayProducts(products);

// Add event listeners to filter options
categoryFilter.addEventListener('change', (e) => {
  const selectedCategory = e.target.value;
  const filteredProducts = products.filter((product) => {
    if (selectedCategory === 'all') {
      return true;
    }
    return product.category === selectedCategory;
  });
  displayProducts(filteredProducts);
});



sizeFilter.addEventListener('change', (e) => {
  const selectedSize = e.target.value;
  const filteredSize = products.filter((product) => {
    if (selectedSize === 'all') {
      return true;
    }
    return product.category === selectedSize;
  });
  displayProducts(filteredSize);
});





priceFilter.addEventListener('change', (e) => {
  const selectedPrice = e.target.value;
  const filteredProducts = products.filter((product) => {
    if (selectedPrice === 'all') {
      return true;
    } else if (selectedPrice === 'low-to-high') {
      return products.sort((a, b) => a.price - b.price);
    } else if (selectedPrice === 'high-to-low') {
      return products.sort((a, b) => b.price - a.price);
    }
  });
  displayProducts(filteredProducts);
});
