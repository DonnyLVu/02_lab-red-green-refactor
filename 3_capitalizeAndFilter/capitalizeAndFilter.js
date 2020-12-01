const capitalize = arr => {
  return arr.map(word => word.toUpperCase())
}
const capitalizeAndFilter = arr => {
  const newArr = capitalize(arr)
  console.log(newArr)
  return newArr.filter(word => word[0] !== 'F')
}

module.exports = {
  capitalizeAndFilter
}; 