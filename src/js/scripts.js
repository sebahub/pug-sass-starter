let galleryItems = document.querySelectorAll('.gallery_item');
let randNum = Math.floor((Math.random() * 100) + 1);
let navButton = document.querySelector('.close_nav');
let navAside = document.querySelector('aside')

navButton.addEventListener('click', function() {
  navAside.classList.toggle('closed_nav');
  navButton.classList.toggle('animation');
  
})

galleryItems.forEach(item => {
  item.style.background = `url('https://source.unsplash.com/random/${randNum++}')`;
  let result = getDefaultComputedStyle(item).backgroundSize;
  console.log(result);
});
