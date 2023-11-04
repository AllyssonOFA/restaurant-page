function createAbout(){

    const aboutSection = document.createElement('section');
    aboutSection.classList.add('about-section');

    const aboutDiv = document.createElement('div');
    
    const aboutTitle = document.createElement('h2');
    aboutTitle.textContent = 'About Us';
    
    const aboutText = document.createElement('p');
    aboutText.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis arcu purus. Curabitur sed auctor orci. Sed in dictum mauris. In ac orci ut mauris tristique tincidunt sed eget enim.';

    aboutDiv.appendChild(aboutTitle);
    aboutDiv.appendChild(aboutText);

    const contactDiv = document.createElement('div');

    const contactTitle = document.createElement('h2');
    contactTitle.textContent = "Contact Us";

    const phoneIcon = document.createElement('i');
    phoneIcon.classList.add('fas');
    phoneIcon.classList.add('fa-phone');

    const phoneText = document.createElement('p');
    phoneText.appendChild(phoneIcon);
    phoneText.innerHTML += "&nbsp;+14241262731"

    const locationIcon = document.createElement('i');
    locationIcon.classList.add('fas');
    locationIcon.classList.add('fa-map-location-dot');

    const locationText = document.createElement('p');
    locationText.appendChild(locationIcon);
    locationText.innerHTML += "&nbsp;Somewhere, 129 9th Avenue";
    
    contactDiv.appendChild(contactTitle);
    contactDiv.appendChild(phoneText);
    contactDiv.appendChild(locationText);


    aboutSection.appendChild(aboutDiv);
    aboutSection.appendChild(contactDiv);

    return aboutSection;
}

export default function renderAbout(){
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createAbout());
}