const elements = document.querySelectorAll('.my-element');

const newArray = [...elements];
console.log('newArray', newArray)


newArray.sort(function(a, b) {
  console.log('a.id', a.id)
  // console.log('b.id', b.id)
    return a.id - b.id;
  })



let i = 0;
const setInte = setInterval(function () {
    if(i === 9){
      clearInterval(setInte);
    }
    newArray[i].classList.remove('opacity-0', 'opacity-1');
    newArray[i].classList.add('animate__animated', 'animate__bounceIn');

    i += 1;
}, 1000)