
import {createApp} from "petite-vue";

import.meta.glob([ '@images/**' ])
import "@styles/app.sass"


interface Header {
    opened: boolean
    handleOpenedHeader(state: boolean): void
}

const headerEl = document.querySelector('[data-header]'),
    headerScope: Header = {
        opened: false,
        handleOpenedHeader(state) {
            document.body.classList.toggle("u-hiddenOverflow", state)
        }
    }
headerEl && createApp(headerScope).mount(headerEl)
//--------------------------------------------------------------------------------hero
const burgerMenu = document.getElementById("burger-menu");
const menuContainer = document.getElementById("menu-container");
const hero = document.querySelector(".hero");
const headerLinks = document.querySelectorAll(".link")

if (burgerMenu && menuContainer && hero) {
    burgerMenu.addEventListener("click", () => {
      menuContainer.classList.toggle("active");
    });
    
    document.addEventListener("click", (event) => {
      const isClickInsideHero = hero.contains(event.target as Node);
      if (!isClickInsideHero && !(event.target as HTMLElement).closest('.menu-container')) {
        menuContainer.classList.remove("active");
      }
    });
    
    document.addEventListener("keydown", (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        menuContainer.classList.remove("active");
      }
    });
}

//-------------------------------------------------
headerLinks.forEach((link) => {
    link.addEventListener("click", () => {
      headerLinks.forEach((link) => {
        link.classList.remove("active");
      });
      link.classList.add("active");
    });
  });


  //--------------------------------------------------------------------------------projects

const projectsLinks = document.querySelectorAll(".header__link")

projectsLinks.forEach((link) => {
    link.addEventListener("click", () => {
      projectsLinks.forEach((link) => {
        link.classList.remove("active");
      });
      link.classList.add("active");
    });
  });

  //--------------------------------------------------------------------------------gallery


const modal = document.getElementById("myModal") as HTMLDivElement;

const modalImg = document.getElementById("img01") as HTMLImageElement;
const captionText = document.getElementById("caption") as HTMLDivElement;

const closeButton = document.getElementsByClassName("close")[0] as HTMLSpanElement;

const prevButton = document.querySelector(".prev") as HTMLAnchorElement;
const nextButton = document.querySelector(".next") as HTMLAnchorElement;

// TypeScript type assertion for NodeList to HTMLImageElement array
const images = Array.from(document.querySelectorAll(".gallery img")) as HTMLImageElement[];

let currentIndex = 0;

// Function to open modal with specific image
const openModal = (index: number) => {
  modal.style.display = "block";
  modalImg.src = images[index].src;
  captionText.innerHTML = images[index].alt;
  currentIndex = index;
};

// Add click events to images
images.forEach((img, index) => {
  img.onclick = () => openModal(index);
});

// Close the modal
closeButton.onclick = function() {
  modal.style.display = "none";
}

// Function to navigate to the next image
const showNextImage = () => {
  currentIndex = (currentIndex + 1) % images.length;
  openModal(currentIndex);
}

// Function to navigate to the previous image
const showPrevImage = () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  openModal(currentIndex);
}

// Event listeners for navigation
nextButton.addEventListener('click', showNextImage);
prevButton.addEventListener('click', showPrevImage);

// Close the modal if click outside of the img
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
