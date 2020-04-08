var array = ["lowercaseOne", "lowercaseTwo", "lowercaseThree"];

array = array.map(function(x) { 
    return x.toUpperCase() 
})

console.log(array)