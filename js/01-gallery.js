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
        ` <li class="gallery__item">
  <a class="gallery__link" href="${original}"  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
    )
    .join("");
}

markupGallery(galleryItems);

refs.ulEl.insertAdjacentHTML("beforeend", markupGallery(galleryItems));

refs.ulEl.addEventListener("click", onImgClick);

function onImgClick(evt) {
  evt.preventDefault();
  if (evt.target === evt.currentTarget) {
    return;
  } //gard close

  const origImg = evt.target.dataset.source; //значення дата-атрибуту

  const instance = basicLightbox
    .create(
      `
      <div class="modal">
          // <img width="1280" height="700" src="${origImg}"/>
      </div>
  `
    )
    .show();

  //   instance.show();
}
