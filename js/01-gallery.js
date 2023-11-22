import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

function createMarkup(arr) {
  return arr.map(
    ({ preview, original, description }) =>
      `<li class="item gallery__item">
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}" 
              data-source="${original}"
              alt="${description}" 
              width="300"
            />
            <h2>${description}</h2>
          </a>
      </li>`
  );
}

console.log(createMarkup(galleryItems));

// // Додаємо слухач подій на галерею
// gallery.addEventListener("click", (event) => {
//   event.preventDefault();

//   const target = event.target;
//   const isImage = target.nodeName === "IMG";

//   if (!isImage) {
//     return;
//   }

//   const largeImageLink = target.dataset.source;
//   const imgAlt = target.alt;

//   function closeModal() {
//     instance.close();
//     window.removeEventListener("keydown", onKeyPress);
//     window.removeEventListener("click", onOverlayClick);
//   }

//   function onKeyPress(event) {
//     if (event.key === "Escape") {
//       closeModal();
//     }
//   }

//   function onOverlayClick(event) {
//     if (event.target.className.includes("basicLightbox")) {
//       closeModal();
//     }
//   }

//   const instance = basicLightbox.create(`
//     <img src="${largeImageLink}" alt="${imgAlt}" />
//   `);

//   instance.show();
//   window.addEventListener("keydown", onKeyPress);
//   window.addEventListener("click", onOverlayClick);
// });
