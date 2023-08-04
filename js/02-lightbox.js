import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const refs = {
  ulEl: document.querySelector(".gallery"),
};
function markupGallery(arr) {
  return arr
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`
    )
    .join("");
}

refs.ulEl.insertAdjacentHTML("beforeend", markupGallery(galleryItems));

refs.ulEl.addEventListener("click", onClickImg);

new SimpleLightbox(".gallery__item a", {
  captionsData: "alt",
  captionDelay: 250,
}); //ініціалізація бібліотеки

function onClickImg(evt) {
  evt.preventDefault();
}
