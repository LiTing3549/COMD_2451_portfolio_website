const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const captionText = document.getElementById('caption');
const closeBtn = document.querySelector('.close');

document.querySelectorAll('.thumbnail').forEach(img => {
  img.addEventListener('click', () => {
    modal.style.display = 'block';
    modalImg.src = img.getAttribute('data-full');
    captionText.innerText = img.alt;
  });
});

closeBtn.onclick = () => {
  modal.style.display = 'none';
};

modal.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}