const {
  logoClicked,
  aboutClicked,
  menuClicked,
  workClicked,
  faqsClicked,
  accountClicked,
  basketClicked,
} = require('./script')

test('return Logo', () => {
  expect(logoClicked()).toBe('Logo')
})

test('return About', () => {
  expect(aboutClicked()).toBe('About')
})

test('return Menu', () => {
  expect(menuClicked()).toBe('Menu')
})

test('return How do we work?', () => {
  expect(workClicked()).toBe('How do we work?')
})

test('return FAQs', () => {
  expect(faqsClicked()).toBe('FAQs')
})

test('return Account', () => {
  expect(accountClicked()).toBe('Account')
})

test('return Basket', () => {
  expect(basketClicked()).toBe('Basket')
})
