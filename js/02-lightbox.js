import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector("ul.gallery");

function createGalleryItem(preview, original, description) {
  return `
	<li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
    </li>
	`;
}

// /
function createGallery(arr) {
  const markup = arr
    .map((item) =>
      createGalleryItem(item.preview, item.original, item.description)
    )
    .join("");
  gallery.innerHTML = markup;
}

// /
createGallery(galleryItems);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
