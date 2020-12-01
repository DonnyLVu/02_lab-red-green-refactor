const { copyAndPush } = require('./copyAndPush')

const numbers = [1, 2, 3]

describe('copyAndPush', () => {
  it('returns a new array with all the items in the original array and a new item pushed to the end', () => {
    const newArr = copyAndPush(numbers, 4);
    expect(newArr)
      .toEqual([1, 2, 3, 4])
  });
  it('makes sure that the original array is unchanged', () => {
    expect(numbers)
      .toEqual([1, 2, 3])
  });
}); 