import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryBox = document.querySelector(".gallery");
const render = createGalleryListMarkup(galleryItems);

galleryBox.insertAdjacentHTML("beforeend", render)
function createGalleryListMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
         class="gallery__image"
         src="${preview}"
         data-source="${original}"
         alt="${description}"
        />
        </a>
      </div>
        `;
    })
    .join("");
}

new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionsData: 'alt',
});
console.log(galleryItems);
