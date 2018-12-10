const boxes = [...document.querySelectorAll('.content-section')];
const bookingButton = document.querySelector('.booking-button');
const bookingForm = document.querySelector('.booking-form');


var options = {
  threshold: 0.6
}
observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      const currentBoxId = entry.target.dataset.box;
      entry.target.classList.add('visible')
    }
  });
}, options);

boxes.forEach((box, i) => {
  observer.observe(box);
  box.dataset.box = i;
});

const handleClick = (event) => {
  bookingForm.classList.toggle('show-form');

}

console.log(bookingButton);
bookingButton.addEventListener('click', handleClick);
