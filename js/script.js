/**
 * Nombre del botón clicado
 *
 * @type {string}
 */
let btnName

/**
 * Asigna a la variable btnName el valor 'Logo'
 *
 * @returns {string}
 */
function logoClicked() {
  return (btnName = 'Logo')
}

/**
 * Asigna a la variable btnName el valor 'About'
 *
 * @returns {string}
 */
function aboutClicked() {
  return (btnName = 'About')
}

/**
 * Asigna a la variable btnName el valor 'Menu'
 *
 * @returns {string}
 */
function menuClicked() {
  return (btnName = 'Menu')
}

/**
 * Asigna a la variable btnName el valor 'How do we work?'
 *
 * @returns {string}
 */
function workClicked() {
  return (btnName = 'How do we work?')
}

/**
 * Asigna a la variable btnName el valor 'FAQs'
 *
 * @returns {string}
 */
function faqsClicked() {
  return (btnName = 'FAQs')
}

/**
 * Asigna a la variable btnName el valor 'Account'
 *
 * @returns {string}
 */
function accountClicked() {
  return (btnName = 'Account')
}

/**
 * Asigna a la variable btnName el valor 'Basket'
 *
 * @returns {string}
 */
function basketClicked() {
  return (btnName = 'Basket')
}

/**
 * Escribe el siguiente HTML dentro de la sección con la id wrapper
 */
function populateWrapper() {
  const wrapper = document.getElementById('wrapper')

  // @ts-ignore
  wrapper.innerHTML = `
    <h4>Has clicado en</h4>
    <p class="result">${btnName}</p>
  `
}

module.exports = {
  logoClicked,
  aboutClicked,
  menuClicked,
  workClicked,
  faqsClicked,
  accountClicked,
  basketClicked
}
