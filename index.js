
function iterativeLog(array) {
  array.forEach((el, i) => {
    console.log(`${i}: ${el}`)
  })
}

function iterate(callback) {
  var array = [1,2,3,4,5,6]
  array.forEach(callback)
  return array
}


function doToArray(array, callback) {
  array.forEach(callback)
}
