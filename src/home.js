import { setActiveButton } from "./website";
import renderMenu from "./menu";

function createHome(){
    const hero = document.createElement('section');
    hero.classList.add('hero-section');

    const contentDiv = document.createElement('div');
    contentDiv.classList.add('hero-content');

    const tag = document.createElement('h3');
    tag.textContent = "The best ice cream around";

    const heroTitle = document.createElement('h2');
    heroTitle.textContent = 'Discover new flavors with our homemade desserts';

    
    const arrowIcon = document.createElement('i');
    arrowIcon.classList.add('fas');
    arrowIcon.classList.add('fa-chevron-right');
    arrowIcon.classList.add('fa-xs');

    const heroBtn = document.createElement('button');
    heroBtn.textContent = "Flavors";
    heroBtn.appendChild(arrowIcon);
    heroBtn.addEventListener('click', function(){
        const menuBtn = document.querySelectorAll('.nav-btn')[1];
        setActiveButton(menuBtn);
        renderMenu();
    });

    contentDiv.appendChild(tag);
    contentDiv.appendChild(heroTitle);
    contentDiv.appendChild(heroBtn);

    const imageDiv = document.createElement('div');
    imageDiv.classList.add('hero-image');

    const image = document.createElement('img');
    image.src = 'assets/hero-img.jpg';
    image.alt = 'A variety of frozen dessets on a table';

    imageDiv.appendChild(image);

    hero.appendChild(contentDiv);
    hero.appendChild(imageDiv);

    return hero;
}

export default function renderHome(){
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createHome());
}