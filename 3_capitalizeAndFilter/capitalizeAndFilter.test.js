const { capitalizeAndFilter } = require('./capitalizeAndFilter')

let arr = ['spot', 'rover', 'bingo', 'fred']

describe('capitalizeAndFilter', () => {
  it('function that takes an array of strings capitalize all strings and filter out any string that starts with the letter f', () => {
    const newArr = capitalizeAndFilter(arr)
    expect(newArr)
      .toEqual(['SPOT', 'ROVER', 'BINGO'])
  });
}); 