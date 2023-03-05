import { galleryItems } from "./gallery-items.js";
// Change code below this line

function makeGalleryMarkup({ preview, original, description }) {
  return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
}

const galleryItemsMarkup = galleryItems
  .map((item) => makeGalleryMarkup(item))
  .join("");

const galleryEl = document.querySelector(".gallery");

galleryEl.insertAdjacentHTML("beforeend", galleryItemsMarkup);

const gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
