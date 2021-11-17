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

  cart.push(product)
  updateCart()
}

const pages = document.querySelectorAll('.header--container nav a')
pages.forEach((page) => {
  page.addEventListener('click', updateCurrentPage)
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


function updateCurrentPage(e){
  e.preventDefault()
  currentPage = e.currentTarget.title
  populateShowcase(currentPage)

  const headerNavItems = document.querySelectorAll('header nav a')

  headerNavItems.forEach((navItem) => {
    navItem.classList.remove('header--active-menu-item')
  })

  const sameTitleItem = document.querySelectorAll(`nav a[title="${currentPage}"]`)
    
  sameTitleItem.forEach((navItem) => {
    navItem.classList.add('header--active-menu-item')
  })
}