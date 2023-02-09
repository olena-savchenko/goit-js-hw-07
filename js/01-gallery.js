import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

	//посилання на контейнер <div class="gallery"></div>
const galleryBox = document.querySelector('.gallery');

galleryBox.insertAdjacentHTML('beforeend', createImgGalleryMarkup(galleryItems));

function createImgGalleryMarkup(images) { 
	return images.map(({ original, preview, description }) => {
		return `<div class="gallery__item">
		<a class="gallery__link" href="${original}">
		  <img
			class="gallery__image"
			src="${preview}	"
			data-source="${original}"
			alt="${description}"
		  />
		</a>
	  </div>`;
	}).join('');

}

