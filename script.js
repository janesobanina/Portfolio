// Hamburger
const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const body = document.body;

const menu = document.querySelector(".nav").cloneNode(1);

hamb.addEventListener("click", hambHandler);

function hambHandler(e) {
    e.preventDefault();
    popup.classList.toggle("open");
    hamb.classList.toggle("active");
    body.classList.toggle("noscroll");
    renderPopup();
}

function renderPopup() {
    popup.appendChild(menu);
}

const links = Array.from(menu.children);

links.forEach((link) => {
    link.addEventListener("click", closeOnClick);
});

function closeOnClick() {
    popup.classList.remove("open");
    hamb.classList.remove("active");
    body.classList.remove("noscroll");
}

// Hide nav - Scroll
let prevScrollpos = window.pageYOffset;

window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;

    if (prevScrollpos > currentScrollPos) {
        document.querySelector(".nav_wrapper").style.top = "0";
    } else {
        document.querySelector(".nav_wrapper").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
}

// ScrollUp
const btnUp = {
    el: document.querySelector('.btn-up'),
    scrolling: false,
    show() {
        if (this.el.classList.contains('btn-up_hide') && !this.el.classList.contains('btn-up_hiding')) {
            this.el.classList.remove('btn-up_hide');
            this.el.classList.add('btn-up_hiding');
            window.setTimeout(() => {
            this.el.classList.remove('btn-up_hiding');
            }, 300);
        }
    },
    hide() {
        if (!this.el.classList.contains('btn-up_hide') && !this.el.classList.contains('btn-up_hiding')) {
            this.el.classList.add('btn-up_hiding');
            window.setTimeout(() => {
            this.el.classList.add('btn-up_hide');
            this.el.classList.remove('btn-up_hiding');
            }, 300);
        }
    },
    addEventListener() {
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY || document.documentElement.scrollTop;
            if (this.scrolling && scrollY > 0) {
            return;
            }
            this.scrolling = false;
            if (scrollY > 400) {
            this.show();
            } else {
            this.hide();
            }
        });
        document.querySelector('.btn-up').onclick = () => {
            this.scrolling = true;
            this.hide();
            window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
            });
        }
    }
}

btnUp.addEventListener();

// Плавный переход
document.querySelectorAll('a[href^="#"').forEach(link => {

    link.addEventListener('click', function(e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);

        const topOffset = document.querySelector('.scrollto').offsetHeight;
        // const topOffset = 0; // если не нужен отступ сверху 
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

// Show more
const showMore = document.querySelector('.btn-center');
const productsLength = document.querySelectorAll('.project').length;
const numberAddPrjct = document.querySelector('.number_add_prjct');

let items = 0;

if(screen.width > 1434){
    items = 8;
    numberAddPrjct.textContent = '4';
} else if(screen.width <= 1434 && screen.width > 704) {
    items = 6;
    numberAddPrjct.textContent = '3';
} else {
    items = 4;
    numberAddPrjct.textContent = '4';
}

showMore.addEventListener('click', () => {
    if(screen.width <= 1434 && screen.width > 704){
        items += 3;
    } else {
        items += 4;
    }

	const array = Array.from(document.querySelector('.project_cards').children);
	const visItems = array.slice(0, items);
    visItems.forEach(el => el.style.display = 'block');

	if (visItems.length === productsLength) {
		showMore.style.display = 'none';
	}
});

// Copyright
const year = document.querySelector('.year');
let curretYear = new Date().getFullYear();

year.textContent = curretYear;

