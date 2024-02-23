function outerFunction() {
  console.log(innerVar); 
  var innerVar = "I am inside outerFunction";

  function innerFunction() {
    console.log(innerVar); 
  }

  return innerFunction;
}

const closure = outerFunction(); 
closure(); 
