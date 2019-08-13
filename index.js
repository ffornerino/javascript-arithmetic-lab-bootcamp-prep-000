var a, b

beforeEach(function() {
  a = Math.floor(Math.random() * 1000)
  b = Math.floor(Math.random() * 1000)
})

function add(a, b){
  var solution = a + b 
  return solution
}

function subtract(a, b){
  var solution = a - b 
  return solution
}

function multiply(a, b){
  var solution = a * b 
  return solution
}

function divide(a, b){
  var solution = a / b 
  return solution
}

function inc(n){
  var solution = a
  solution +=1 
  return solution
}

function dec(n){
  var solution = a
  solution -=1 
  return solution
}