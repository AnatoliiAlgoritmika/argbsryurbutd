import { showBgItems } from './showBgItems.js'
import { playPreloader } from './playPreloader.js'
import { modalSearch } from './modalSearch.js'
import { setTopAnimeCard } from './setTopAnimeCard.js'
import { renderGanres } from './renderGanres.js'
import { slider } from './slider.js'
import { renderCategoryDropdown } from './renderCategoryDropdown.js'
import { scrollTop } from './scrollTop.js'
// ! служебные функции
import { getAllGanres } from './getAllGanres.js'
import { getData } from './getData.js'

showBgItems();
playPreloader();
modalSearch();
setTopAnimeCard();
renderGanres();
slider();
renderCategoryDropdown();
scrollTop();