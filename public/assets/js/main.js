document.getElementById('year').textContent = new Date().getFullYear();

const photos = [
  "DJI_0053.jpg",
  "DJI_0068.jpg",
  "DJI_0103.jpg",
  "P1013238-AI.jpeg",
  "P1013245-AI.jpeg",
  "P1013252-AI.jpeg",
  "P1013259-AI.jpeg",
  "P1013260-AI.jpeg",
  "P1013262-AI.jpeg",
  "P1013273-AI.jpeg",
  "P1013283-AI.jpeg",
  "P1013288-AI.jpeg",
  "P1013290-AI.jpeg",
  "P1013295-AI.jpeg",
  "P1013296-AI.jpeg",
  "P1013306-AI.jpeg",
  "P1013315-AI.jpeg",
  "P1013321-AI.jpeg",
  "P1013325-AI.jpeg",
  "P1013330-AI.jpeg",
  "P1013334-AI-2.jpeg",
  "P1013338-AI.jpeg",
  "P1013346-AI.jpeg",
  "P1013349-AI.jpeg",
  "P1013353-AI.jpeg",
  "P1013357-AI.jpeg",
  "P1013359-AI.jpeg",
  "P1013361-AI.jpeg",
  "P1013365-AI.jpeg",
  "P1013370-AI.jpeg",
  "P1013376-AI.jpeg",
  "P1013378-AI.jpeg",
  "P1013380-AI.jpeg",
  "P1013397-AI.jpeg",
  "P1013411-AI.jpeg",
  "P1013431-AI.jpeg",
  "P1013434-AI.jpeg"
];

const galleryGrid = document.getElementById("galleryGrid");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxCaption = document.getElementById("lightboxCaption");
const closeBtn = document.getElementById("lightboxClose");
const prevBtn = document.getElementById("lightboxPrev");
const nextBtn = document.getElementById("lightboxNext");
let currentIndex = 0;

function labelFor(photoName, index) {
  return "Photo " + (index + 1) + " of " + photos.length;
}

function renderGallery() {
  const markup = photos.map(function (photoName, index) {
    const imagePath = "assets/media/" + photoName;
    const label = labelFor(photoName, index);
    return (
      '<figure class="gallery-card">' +
      '<button type="button" class="gallery-open" data-index="' + index + '" aria-label="Open ' + label + '">' +
      '<img src="' + imagePath + '" alt="' + label + '" loading="lazy" decoding="async" />' +
      "</button>" +
      "<figcaption>" + label + "</figcaption>" +
      "</figure>"
    );
  }).join("");
  galleryGrid.innerHTML = markup;
}

function showPhoto(index) {
  currentIndex = (index + photos.length) % photos.length;
  const fileName = photos[currentIndex];
  const imagePath = "assets/media/" + fileName;
  const label = labelFor(fileName, currentIndex);
  lightboxImage.src = imagePath;
  lightboxImage.alt = label;
  lightboxCaption.textContent = label;
}

function openLightbox(index) {
  showPhoto(index);
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("lightbox-open");
}

function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.classList.remove("lightbox-open");
  lightboxImage.src = "";
}

renderGallery();

galleryGrid.addEventListener("click", function (event) {
  const button = event.target.closest(".gallery-open");
  if (!button) {
    return;
  }
  const index = Number(button.dataset.index);
  openLightbox(index);
});

closeBtn.addEventListener("click", closeLightbox);
prevBtn.addEventListener("click", function () {
  showPhoto(currentIndex - 1);
});
nextBtn.addEventListener("click", function () {
  showPhoto(currentIndex + 1);
});

lightbox.addEventListener("click", function (event) {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

document.addEventListener("keydown", function (event) {
  if (!lightbox.classList.contains("open")) {
    return;
  }
  if (event.key === "Escape") {
    closeLightbox();
  }
  if (event.key === "ArrowLeft") {
    showPhoto(currentIndex - 1);
  }
  if (event.key === "ArrowRight") {
    showPhoto(currentIndex + 1);
  }
});
