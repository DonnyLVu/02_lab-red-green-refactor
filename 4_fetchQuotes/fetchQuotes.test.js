const { fetchQuotes } = require('./fetchQuotes')
describe('fetchquotes', () => {
  it('returns a signle quote from futurama', async () => {
    const quote = await fetchQuotes()
    expect(quote)
      .toEqual({
        name: 'Bender',
        text: 'I\'m a fraud. A poor, lazy, sexy fraud.',
        image: 'https://res.cloudinary.com/dzxqhkyqd/image/fetch/c_scale,w_500/https://res.cloudinary.com/dzxqhkyqd/image/upload/v1552429540/bender.png'
      })
  });
}); 