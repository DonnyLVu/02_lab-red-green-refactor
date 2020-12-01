const capitalizeAndFilter = arr => {
  const newArr = []
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i].toUpperCase()
    if (item[0] !== 'F')
      newArr.push(item)
  }
  console.log(newArr)
  return newArr
}
module.exports = {
  capitalizeAndFilter
}; 