/**
 * Texto del botón clicado
 *
 * @type {string}
 */
let text

/**
 * Asigna a la variable text el valor 'Logo'
 *
 * @returns {string}
 */
function logoClicked() {
  return (text = 'Logo')
}

/**
 * Asigna a la variable text el valor 'About'
 *
 * @returns {string}
 */
function aboutClicked() {
  return (text = 'About')
}

/**
 * Asigna a la variable text el valor 'Menu'
 *
 * @returns {string}
 */
function menuClicked() {
  return (text = 'Menu')
}

/**
 * Asigna a la variable text el valor 'How do we work?'
 *
 * @returns {string}
 */
function workClicked() {
  return (text = 'How do we work?')
}

/**
 * Asigna a la variable text el valor 'FAQs'
 *
 * @returns {string}
 */
function faqsClicked() {
  return (text = 'FAQs')
}

/**
 * Asigna a la variable text el valor 'Account'
 *
 * @returns {string}
 */
function accountClicked() {
  return (text = 'Account')
}

/**
 * Asigna a la variable text el valor 'Basket'
 *
 * @returns {string}
 */
function basketClicked() {
  return (text = 'Basket')
}

/**
 * Escribe el siguiente HTML dentro de la sección con la id wrapper
 */
function populateWrapper() {
  const wrapper = document.getElementById('wrapper')

  // @ts-ignore
  wrapper.innerHTML = `
    <h4>Has clicado en</h4>
    <p class="result">${text}</p>
  `
  return 'Populated!'
}

module.exports = {
  logoClicked,
  aboutClicked,
  menuClicked,
  workClicked,
  faqsClicked,
  accountClicked,
  basketClicked,
  populateWrapper
}
