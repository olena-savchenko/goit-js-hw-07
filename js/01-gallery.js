import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

	//посилання на контейнер <div class="gallery"></div>
const galleryBox = document.querySelector('.gallery');

	// додає розмітку галереї в контейнер
galleryBox.insertAdjacentHTML('beforeend', createImgGalleryMarkup(galleryItems));

galleryBox.addEventListener('click', (event) => { 
		//зображення обгорнуте посиланням, по кліку за замовчуванням користувач буде перенаправлений на іншу сторінку
		// preventDefault забороняє цю поведінку за замовчуванням.
	event.preventDefault();
})

	// створює розмітку галереї за шаблоном з об'єкта galleryItems
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

