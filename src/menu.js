const menuData = {
	"cones": [
		{
			"flavor": "Banana",
			"price": "$7"
		},
		{
			"flavor": "Mint Chocolate Chip",
			"price": "$10"
		},
		{
			"flavor": "Vanilla",
			"price": "$5"
		},
		{
			"flavor": "Avocado",
			"price": "$7"
		},
		{
			"flavor": "Mango",
			"price": "$5"
		},
		{
			"flavor": "Blueberry",
			"price": "$10"
		},
		{
			"flavor": "Chocolate",
			"price": "$5"
		},
		{
			"flavor": "Cookies N' Cream",
			"price": "$8"
		},
		{
			"flavor": "Pistachio",
			"price": "$7"
		},
		{
			"flavor": "Coconut",
			"price": "$5"
		},
		{
			"flavor": "Lemon",
			"price": "$8"
		},
		{
			"flavor": "Strawberry",
			"price": "$5"
		},
		{
			"flavor": "Peanut Butter",
			"price": "$10"
		},
		{
			"flavor": "Watermelon",
			"price": "$7"
		},
		{
			"flavor": "Peach",
			"price": "$8"
		}
	],
	"sundaes": [
			{
				"flavor": "Hot Fudge",
				"price": "$15"
			},
			{
				"flavor": "Banana Split",
				"price": "$12"
			},
			{
				"flavor": "Chocolate Sundae Pie",
				"price": "$20"
			},
			{
				"flavor": "Cereal Milk",
				"price": "$15"
			},
			{
				"flavor": "Rum Caramel Banana Bread",
				"price": "$15"
			},
			{
				"flavor": "Ultimate Turtle",
				"price": "$20"
			},
			{
				"flavor": "Homemade Brownie",
				"price": "$12"
			},
			{
				"flavor": "Strawberry & Berries",
				"price": "$15"
			}
	]
};


function createMenuSection(menuKey){
    const menuSection = document.createElement('section');
    menuSection.classList.add('menu-section');

    const sectionTitle = document.createElement('h2');
    sectionTitle.textContent = menuKey;

    menuSection.appendChild(sectionTitle);

    menuData[menuKey].forEach((item) => {
        menuSection.appendChild(createMenuItem(item.flavor, item.price));
    });
 
    return menuSection;
}

function createMenuItem(name, price){
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    const itemName = document.createElement('h3');
    itemName.textContent = name;

    const itemDivider = document.createElement('div');
    itemDivider.classList.add('item-divider');

    const itemPrice = document.createElement('h3');
    itemPrice.textContent = price;

    menuItem.appendChild(itemName);
    menuItem.appendChild(itemDivider);
    menuItem.appendChild(itemPrice);

    return menuItem;
}

export default function renderMenu(){
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createMenuSection('cones'));
    main.appendChild(createMenuSection('sundaes'));
}