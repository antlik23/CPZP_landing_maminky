import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

const swiper = new Swiper('.mySwiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 5000,
    }
});

// JavaScript pro záložky
const tabList = document.querySelector('.tab-list');
const tabContent = document.querySelector('.tab-content');

tabList.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        const activeTab = document.querySelector('.tab-list li.active');
        activeTab.classList.remove('active');
        event.target.classList.add('active');

        const activeContent = document.querySelector('.tab-content > div.active');
        activeContent.classList.remove('active');
        document.getElementById(event.target.dataset.tab).classList.add('active');
    }
});