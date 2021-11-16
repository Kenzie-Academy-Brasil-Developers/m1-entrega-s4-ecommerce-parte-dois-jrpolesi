function populateShowcase(tag){
  const showCase = document.querySelector('.showcase')
  showCase.innerHTML = ''

  if(tag){
    products = products.filter((product) => {
      return product.tag === tag
    })
  }

  products.forEach((product) => {
    const card = document.createElement('article')
    card.className = 'showcase--card'

    createCardFigure(card, product)
    createCardDetails(card, product)

    showCase.appendChild(card)
  })
}

function createCardFigure(card, product){
  const figure = document.createElement('figure')
  const image = document.createElement('img')
  image.src = product.image
  image.alt = product.name

  const figcaption = document.createElement('figcaption')
  figcaption.innerText = product.name

  figure.append(image, figcaption)

  card.appendChild(figure)
}

function createCardDetails(card, product){
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
  price.innerText = `R$ ${product.price}`

  const addToCart = document.createElement('span')
  addToCart.className = 'showcase--card-add-to-cart'
  addToCart.innerText = 'Adicionar ao carrinho'
  addToCart.dataset.id = product.id

  cardDetails.append(cardTag, cardName, cardParagraph, price, addToCart)

  card.appendChild(cardDetails)
}

function updateCart(){
  console.log(cart)
}