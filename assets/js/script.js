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