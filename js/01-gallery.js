import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

// products - galleryItems   - ЗАМЕНА!!!

const container = document.querySelector(".gallery");

container.insertAdjacentHTML("beforeend", createMarkup(galleryItems));
container.addEventListener("click", handleClick);

function createMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) => `
    <li data-id="${description}" class="item galleryItems">
      <img src="${preview}" alt="${description}" width="300">
    </li>`
    )
    .join("");
}

function handleClick(event) {
  if (event.target === event.currentTarget) {
    return;
  }

  const currentGalleryItem = event.target.closest(".galleryItems");
  const id = currentGalleryItem.dataset.description;
  const galleryItem = galleryItems.find(
    ({ id: descriptionId }) => descriptionId === Number(id)
  );
  console.log(id);

  const instance = basicLightbox.create(`
    <div class="modal">
      <img src="${galleryItems.img}" alt="${galleryItems.description}">
    </div>
`);

  instance.show();
}

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
