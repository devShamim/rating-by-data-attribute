const ratingWrapper = document.querySelectorAll('.ratings');
ratingWrapper.forEach((elm, ind) => {
  const dataRating = elm.getAttribute('data-rating');
  const drf = parseFloat(dataRating);
  function addClasses(classOne, classTwo) {
    elm.classList.add(classOne, classTwo);
  }
  switch(true){
    case drf === 1:
      addClasses('one', 'S');
      break;
    case drf > 1 && drf < 2:
        addClasses('one', 'one-n-half');
        break;
    case drf === 2:
      addClasses('two', 'S');
      break;
    case drf > 2 && drf < 3:
        addClasses('two', 'two-n-half');
        break;
    case drf === 3:
      addClasses('three', 'S');
      break;
    case drf > 3 && drf < 4:
        addClasses('three', 'three-n-half');
        break;
    case drf === 4:
      addClasses('four', 'S');
      break;
    case drf > 4 && drf < 5:
        addClasses('four', 'four-n-half');
        break;
    case drf === 5:
      addClasses('five', 'S');
      break;
    default:
      addClasses('none', 'S');
  }
})

const initialVal = parseFloat(4);







