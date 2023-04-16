import { getData } from './getData.js'

export const setTopAnimeCard = () => {
    const filterGallery = document.querySelector('.filter__gallery');

    const createTopAnimeCard = (serial) => {

        const {image,title,views,rating} = serial

        const card = document.createElement('div');
        card.className = 'product__sidebar__view__item set-bg mix day years';
        card.setAttribute('data-setbg', image);
        const content = `
            <div class="ep"> ${rating} / 10</div>
            <div class="view"><i class="fa fa-eye"></i> ${views}</div>
            <h5><a href="/anime-details.html">${title}</a></h5>
        `;

        card.insertAdjacentHTML('beforeend', content);
        filterGallery.insertAdjacentElement('beforeend', card);
    };

    getData('../db.json')
    .then((data)=>{
        const topFiveAnime = data.anime.sort((a,b)=> b.views - a.views).splice(0,5);

        topFiveAnime.forEach((serial)=> {
            createTopAnimeCard(serial);
        })
        document.querySelectorAll('.set-bg').forEach((item) => {
        item.style.backgroundImage = `url(${item.getAttribute('data-setbg')})`})
    })
};