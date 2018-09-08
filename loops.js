

function forLoop(array){
<<<<<<< HEAD
  for(let i = 0; i<25; i++){
=======
  for(int i = 0; i<25; i++){
>>>>>>> cd745066c00f9b355f4c2154e263f34a684310d6
    if(i==1){
      array.push("I am 1 strange loop.")
    }else{
      array.push("I am ${i} strange loops.")
    }
  }
  return array;
}

function whileLoop(n){
<<<<<<< HEAD
var string = 'done'
  while(n>0){
    console.log(n);
    n--;
  }
//console.log('done');
  return string;
}

function maybeTrue() {
  return Math.random() >= 0.5 // Returns a random number between 0 (inclusive) and 1 (exclusive)
}

function doWhileLoop (array){
while(array.length > 0 && maybeTrue()){
   array.length--;
 }
 return array;
=======
int count = 0;
  while(n<0){
    count++;
    n--;
  }
  return count;
}


function doWhileLoop (array){
  while(array.length > 0 && maybeTrue){
    array.pop()
  }
  return array;
>>>>>>> cd745066c00f9b355f4c2154e263f34a684310d6
}
