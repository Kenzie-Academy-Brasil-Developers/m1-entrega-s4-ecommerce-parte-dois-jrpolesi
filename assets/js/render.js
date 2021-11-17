function populateShowcase(tag, search) {
  const showCase = document.querySelector('.showcase')
  showCase.innerHTML = ''

  let showcaseProducts = [...products]

  if (tag && tag !== 'todos') {
    showcaseProducts = showcaseProducts.filter((product) => {
      return product.tag.toLowerCase() === tag
    })
  }

  if (search){
    showcaseProducts = showcaseProducts.filter((product) => {
      return product.name.toLowerCase().includes(search.toLowerCase())
    })
  }

  showcaseProducts.forEach((product) => {
    const card = document.createElement('article')
    card.className = 'showcase--card'

    createCardFigure(card, product)
    createCardDetails(card, product)

    showCase.appendChild(card)
  })
}

function createCardFigure(card, product) {
  const figure = document.createElement('figure')
  const image = document.createElement('img')
  image.src = product.image
  image.alt = product.name

  const figcaption = document.createElement('figcaption')
  figcaption.innerText = product.name

  figure.append(image, figcaption)

  card.appendChild(figure)
}

function createCardDetails(card, product) {
  const cardDetails = document.createElement('div')
  cardDetails.className = 'showcase--card-details'

  const cardTag = document.createElement('div')
  cardTag.innerText = product.tag
  cardTag.className = 'showcase--card-tag'

  const cardName = document.createElement('h3')
  cardName.innerText = product.name

  const cardParagraph = document.createElement('p')
  cardParagraph.innerText = product.description

  const price = document.createElement('span')
  price.className = 'showcase--card-price'
  price.innerText = `R$ ${product.price.toFixed(2)}`

  const addToCartElement = document.createElement('span')
  addToCartElement.className = 'showcase--card-add-to-cart'
  addToCartElement.innerText = 'Adicionar ao carrinho'
  addToCartElement.dataset.id = product.id
  addToCartElement.addEventListener('click', addToCart)

  cardDetails.append(cardTag, cardName, cardParagraph, price, addToCartElement)

  card.appendChild(cardDetails)
}

function updateCart() {
  isCartEmpty()
  createCartItem()
  updateTotal()
}

function isCartEmpty() {
  const emptyCart = document.querySelector('.aside--empty-cart')
  const cartItems = document.querySelector('.aside--inside-cart-items')
  const cartTotal = document.querySelector('.aside--total-cart')

  if (cart.length === 0) {
    emptyCart.classList.remove('hide')
    cartItems.classList.add('hide')
    cartTotal.classList.add('hide')
  } else {
    emptyCart.classList.add('hide')
    cartItems.classList.remove('hide')
    cartTotal.classList.remove('hide')
  }
}

function createCartItem() {
  const cartItems = document.querySelector('.aside--inside-cart-items')
  cartItems.innerHTML = ""

  cart.forEach((product) => {
    const cartItem = document.createElement('article')
    cartItem.className = 'aside--cartItem'

    createCartItemFigure(cartItem, product)
    createCartItemInfo(cartItem, product)

    cartItems.appendChild(cartItem)
  })
}

function createCartItemFigure(cartItem, product){
  const figure = document.createElement('figure')
  
  const image = document.createElement('img')
  image.src = product.image
  image.alt = product.name

  const figcaption = document.createElement('figcaption')
  figcaption.innerText = product.name

  figure.append(image, figcaption)

  cartItem.appendChild(figure)
}

function createCartItemInfo(cartItem, product){
  const div = document.createElement('div')
  
  const h3 = document.createElement('h3')
  h3.innerText = product.name

  const price = document.createElement('span')
  price.className = 'cartItem--price'
  price.innerText = `R$ ${product.price.toFixed(2)}`

  const removeButton = document.createElement('span')
  removeButton.className = 'cartItem--remove-of-cart'
  removeButton.innerText = 'Remover produto'
  removeButton.dataset.id = product.id
  removeButton.addEventListener('click', removeItem)

  div.append(h3, price, removeButton)

  cartItem.appendChild(div)
}

function updateTotal(){
  const totalPrice = cart.reduce((acc, product) => acc + product.price, 0)
  const quantity = cart.length

  const totalPriceElement = document.querySelector('.total-cart--total-price')
  totalPriceElement.innerText = totalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' })

  const quantityElement = document.querySelector('.total-cart--quantity')
  quantityElement.innerText = quantity
}

