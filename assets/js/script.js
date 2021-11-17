populateShowcase()
updateCart()

const addToCartButtons = document.querySelectorAll('span[data-id]')

addToCartButtons.forEach((button) => {
  button.addEventListener('click', addToCart)
})


function addToCart(e){
  const productId = e.target.dataset.id
  let product = {}
  
  for(let i = 0; i < products.length; i++){
    if(products[i].id === productId){
      product = products[i]
    }
  }

  if(!cart.includes(product)){
    cart.push(product)
  }

  updateCart()
}

function handleWithShowCartButton(){
 const buyCartDiv = document.getElementById('containerCart')
 buyCartDiv.classList.toggle('hideCart')
}
