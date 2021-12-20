const ratingWrapper = document.querySelector('.ratings');
const dataRating = document.querySelector('.ratings').getAttribute('data-rating');
const dataRatingFloat = parseFloat(dataRating);
switch(dataRatingFloat){
  case 1:
    ratingWrapper.classList.add('one');
    break;
  case 2:
    ratingWrapper.classList.add('two');
    break;
  case 3:
    ratingWrapper.classList.add('three');
    break;
  case 4:
    ratingWrapper.classList.add('four');
    break;
  case 5:
    ratingWrapper.classList.add('five');
    break;
  default:
    ratingWrapper.classList.add('none');
}

function fractionClass(v1, v2, classOne, classTwo){
  if(dataRatingFloat > v1 && dataRatingFloat < v2){
    ratingWrapper.classList.add(classOne, classTwo);
  }
}

fractionClass(1,2, 'one', 'one-n-half');
fractionClass(2,3, 'two', 'two-n-half');
fractionClass(3,4, 'three', 'three-n-half');
fractionClass(4,5, 'four', 'four-n-half');