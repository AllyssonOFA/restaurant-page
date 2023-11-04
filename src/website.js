import renderHome from "./home";
import renderMenu from "./menu";
import renderAbout from "./about";

function createHeader(){
    const header = document.createElement('header');
    header.classList.add('header');

    header.appendChild(createLogo());
    header.appendChild(createNav());

    return header;
}

function createLogo(){
    const logoDiv = document.createElement('div');
    logoDiv.classList.add('header-logo');
    
    const logoIcon = document.createElement('i');
    logoIcon.classList.add('fas');
    logoIcon.classList.add('fa-ice-cream');

    const logoTitle = document.createElement('h1');
    logoTitle.classList.add('logo-title');
    logoTitle.appendChild(logoIcon);
    logoTitle.innerHTML += "&nbsp;ICE & CREAM";
    

    logoDiv.appendChild(logoTitle);
    
    return logoDiv;
}

function createNav(){
    const nav = document.createElement('nav');
    nav.classList.add('header-nav');

    const homeBtn = document.createElement('button');
    homeBtn.classList.add('nav-btn');
    homeBtn.textContent = 'Home';
    homeBtn.addEventListener('click', function(e){
        if(e.target.classList.contains('active')) return;
        setActiveButton(homeBtn);
        renderHome();
    });

    const menuBtn = document.createElement('button');
    menuBtn.classList.add('nav-btn');
    menuBtn.textContent = 'Flavors';
    menuBtn.addEventListener('click', function(e){
        if(e.target.classList.contains('active')) return;
        setActiveButton(menuBtn);
        renderMenu();
    });

    const aboutBtn = document.createElement('button');
    aboutBtn.classList.add('nav-btn');
    aboutBtn.textContent = 'About Us';
    aboutBtn.addEventListener('click', function(e){
        if(e.target.classList.contains('active')) return;
        setActiveButton(aboutBtn);
        renderAbout();
    });

    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(aboutBtn);

    return nav;
}

export function setActiveButton(button){
    const btns = document.querySelectorAll('.nav-btn');

    btns.forEach(function(btn){
        if(button !== this) btn.classList.remove('active');
    });

    button.classList.add('active');
}

function createMain(){
    const main = document.createElement('main');
    main.classList.add('main');
    main.setAttribute('id', 'main');
    return main;
}

function createFooter(){
    const footer = document.createElement('footer');
    footer.classList.add('footer');

    const attribution = document.createElement('p');
    
    attribution.textContent = `Copyright © ${new Date().getFullYear()} AllyssonOFA`;
    const githubLink = document.createElement('a');
    githubLink.href = "https://github.com/AllyssonOFA";

    const githubIcon = document.createElement('i');
    githubIcon.classList.add('fab');
    githubIcon.classList.add('fa-github');

    githubLink.appendChild(githubIcon);

    attribution.appendChild(githubLink);

    footer.appendChild(attribution);

    return footer;
}

export default function initPage(){
    const content = document.getElementById("content");

    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());

    setActiveButton(document.querySelector('.nav-btn'));
    renderHome();
}