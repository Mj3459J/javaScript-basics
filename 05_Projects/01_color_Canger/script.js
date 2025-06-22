const button = document.querySelectorAll('.button');
const body = document.querySelector('body');

button.forEach(function (button) {
  console.log(button);

  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);

    const currBtnId = e.target.id;

    if (currBtnId === 'grey') {
      body.style.backgroundColor = 'grey';
    } else if (currBtnId === 'white') {
      body.style.backgroundColor = 'white';
    } else if (currBtnId === 'blue') {
      body.style.backgroundColor = 'blue';
    } else {
      // yellow.
      body.style.backgroundColor = 'yellow';
    }
  });
});
