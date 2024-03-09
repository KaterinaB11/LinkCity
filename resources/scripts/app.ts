
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
//--------------------------------------------------------------------------------
const burgerMenu = document.getElementById("burger-menu");
const menuContainer = document.getElementById("menu-container");
const hero = document.querySelector(".hero");

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
