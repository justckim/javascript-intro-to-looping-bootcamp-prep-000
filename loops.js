function forLoop(array) {
  
  for (i = 0; i < 25; i++) {
    if (i === 1) {
      array.push("I am 1 strange loop")
    }
  
    else {
      array.push("I am ${i} strange loop")
    }
  }
  return array
}

function whileLoop(number) {
  
  while (number > 0) {
    console.log(number--)
  }
  return "done"
}

<<<<<<< HEAD
function doWhileLoop(array) {
  
  function maybeTrue() {
    return Math.random() >= 0.5
  }
  
  do {
    array.pop()
  } while (array.length > 0 && maybeTrue())
  
  return array
}
=======
function maybeTrue() {
    return Math.random() >= 0.5
}
  
function doWhileLoop(array) {
  
  do{
    array.pop()
  } while (array.length > 0 && maybeTrue())
}

>>>>>>> 300183a7aef779023df1f2c8acf67440cfcb82c5
