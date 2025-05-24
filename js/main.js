// Show Back to Top Button on Scroll

const backToTopWrapper = document.getElementById('backToTopWrapper');
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    backToTopWrapper.style.display = window.scrollY > 300 ? 'block' : 'none';
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});