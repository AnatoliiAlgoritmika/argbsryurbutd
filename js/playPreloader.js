export const playPreloader = () => {
    const preloder = document.querySelector('#preloder');
    setTimeout(()=> preloder.classList.remove('active'), 500)
}