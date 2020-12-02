const request = require('superagent')

const fetchQuotes = async () => {
  const { body } = await request
    .get('futuramaapi.herokuapp.com/api/quotes?')
  const { character: name, quote: text, image } = body[0]
  return { name, text, image }
}

module.exports = {
  fetchQuotes
} 