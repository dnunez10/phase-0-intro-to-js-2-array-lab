// Write your solution here!
var cats = ['Milo', 'Otis', 'Garfield'];
function destructivelyAppendCat(appendCat){
    cats.push(appendCat);
    return cats;
  }
  function destructivelyPrependCat(prependCat){
      cats.unshift(prependCat);
      return cats;
  }
  function destructivelyRemoveLastCat(){
      cats.pop();
      return cats;
  }
  function destructivelyRemoveFirstCat(){
    cats.shift();
    return cats;
}
function appendCat(appendCats){
    return [...cats, appendCats];
}
function prependCat(prependCats){
    return [prependCats, ...cats];
}
function removeLastCat(){
    return cats.slice(0, cats.length - 1);
  }
function removeFirstCat(){
    return cats.slice(1);
  }