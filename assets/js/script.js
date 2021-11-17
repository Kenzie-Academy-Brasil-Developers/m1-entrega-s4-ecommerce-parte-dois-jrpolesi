let currentPage = 'todos'

populateShowcase()
updateCart()

const addToCartButtons = document.querySelectorAll('span[data-id]')

addToCartButtons.forEach((button) => {
  button.addEventListener('click', addToCart)
})

function addToCart(e) {
  const productId = e.target.dataset.id
  let product = {}

  for (let i = 0; i < products.length; i++) {
    if (products[i].id === productId) {
      product = products[i]
      break
    }
  }

  if (!cart.includes(product)) {
    cart.push(product)
    updateCart()
  }
}

const pages = document.querySelectorAll('.header--container nav a')
pages.forEach((page) => {
  page.addEventListener('click', (e) => {
    e.preventDefault()
    currentPage = e.currentTarget.title
    populateShowcase(currentPage)
  })
})

function removeItem(e) {
  const productId = e.target.dataset.id
  let product = {}

  for (let i = 0; i < products.length; i++) {
    if (products[i].id === productId) {
      product = products[i]
      break
    }
  }

  cart.splice(cart.indexOf(product), 1)
  updateCart()
}

function handleWithShowCartButton() {
  const buyCartDiv = document.getElementById('containerCart')
  buyCartDiv.classList.toggle('hideCart')
}
