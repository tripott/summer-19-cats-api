module.exports = catName =>
  catName
    .split(' ')
    .map(item => item.toLowerCase())
    .join('-')
