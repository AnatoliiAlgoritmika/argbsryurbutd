import { getData } from './getData.js'
import { getAllGanres } from './getAllGanres.js'

export const renderCategoryDropdown = () => {
    const dropdownMenu = document.querySelector('.dropdown');
    getData('../db.json')
    .then((serials)=> {
        const ganres = getAllGanres(serials.anime);
        ganres.forEach((ganre)=>{
            dropdownMenu.insertAdjacentHTML('beforeend', `
                <li><a href="./categories.html">${ganre}</a></li>
            `)
        });
    });
};