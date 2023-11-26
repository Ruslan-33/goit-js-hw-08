import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

function createMarkup(array) {
  return array
    .map(
      ({ preview, original, description }) =>
        `
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
    `
    )
    .join("");
}

// /
gallery.insertAdjacentHTML("beforeend", createMarkup(galleryItems));

gallery.addEventListener("click", handleClick);

function handleClick(event) {
  if (event.target === event.currentTarget) {
    return;
  }
  event.preventDefault();

  const instance = basicLightbox.create(`
	<img src=${event.target.dataset.source}
    >
`);
  instance.show();

  // /
  document.addEventListener("keypress", handlePress);
  function handlePress(event) {
    console.log(event);
    if (event.code === "Escape") {
      instance.close();
    }
  }
}
