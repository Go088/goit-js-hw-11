import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const form = document.querySelector(".form")
const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader");

loader.style.display = "none";

const getImages = (searchTerm) => {
    const BASE_URL = "https://pixabay.com/api/";
    const API_KEY = "41530032-c682b7302a1559a8b9f540776";

    const searchParams = new URLSearchParams({
    key: API_KEY,
    q: searchTerm,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
})
    return fetch(`${BASE_URL}?${searchParams}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Request is not ok");
            }
            return response.json()
        }) 
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  gallery.innerHTML = "";
  loader.style.display = "inline-block";

  const inputValue = event.target.elements.search.value;

  getImages(inputValue)
    .then(response => {
      loader.style.display = "none";

      if (!response.hits.length) {
        iziToast.error({
          message: "Sorry, there are no images matching your search query. Please try again!",
          position: "topRight",
          messageSize: "11",
          backgroundColor: "#EF4040",
          messageColor: "#FFF"
});
      }
      gallery.innerHTML = createMarkup(response.hits);
      
      let galleryPage = new SimpleLightbox('.gallery a', {
        captions: true,
        captionsData: 'alt',
        captionDelay: 250,
      });
      galleryPage.refresh();

      form.reset();
    }
)
    .catch((error) => {
      loader.style.display = "none";
      console.error("Error");
  })

})

const createMarkup = (hits) => {
  return hits.reduce((html, { largeImageURL, webformatURL, tags, likes, views, comments, downloads }) => html + `
            <li class="gallery-item">
          <a class="gallery-link" href="${largeImageURL}">
            <img
              class="gallery-image"
              src="${webformatURL}"
              alt="${tags}"
              width="360"
            />
          </a>
          <div class="info">
            <div class="info-item">
              <h2>Likes</h2>
              <p>${likes}</p>
            </div>
            <div class="info-item">
              <h2>Views</h2>
              <p>${views}</p>
            </div>
            <div class="info-item">
              <h2>Comments</h2>
              <p>${comments}</p>
            </div>
            <div class="info-item">
              <h2>Downloads</h2>
              <p>${downloads}</p>
            </div>
          </div>
        </li>`, "");
}
