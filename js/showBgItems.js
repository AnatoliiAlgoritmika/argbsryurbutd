export const showBgItems = () => {
    const productItemPic = document.querySelectorAll('.set-bg');
    productItemPic.forEach((item) => {
        // bg = item.getAttribute('data-setbg')
        // item.style.backgroundImage = `url(${bg})`

        item.style.backgroundImage = `url(${item.getAttribute('data-setbg')})`
    })
};
