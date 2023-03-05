import { galleryItems } from "./gallery-items.js";
// Change code below this line

function makeGalleryMarkup({ preview, original, description }) {
  return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
}

const galleryItemsMarkup = galleryItems
  .map((item) => makeGalleryMarkup(item))
  .join("");

const galleryEl = document.querySelector(".gallery");

galleryEl.insertAdjacentHTML("beforeend", galleryItemsMarkup);
galleryEl.addEventListener("click", handleGalleryElClick);

function handleGalleryElClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }

  const originalUrl = e.target.dataset.source;

  document.addEventListener("keydown", handleEscapeBtn);

  const modal = basicLightbox.create(
    `<img src="${originalUrl}" alt="${e.target.alt}">`,
    {
      onClose: (modal) => {
        document.removeEventListener("keydown", handleEscapeBtn);
      },
    }
  );

  modal.show();

  function handleEscapeBtn(e) {
    e.preventDefault();
    const visible = basicLightbox.visible();

    if (visible && e.code === "Escape") {
      modal.close();
    }
  }
}
