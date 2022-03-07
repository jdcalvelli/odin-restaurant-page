import { navbar } from "./nav"

const menuPage = (() => {
   
    const renderMenuPage = () => {
        navbar.renderNavBar();

        //MENU PAGE OVERALL DIV
        const menuPageDiv = document.createElement('div');
        menuPageDiv.classList.add('menuPageDiv');
        document.querySelector('.content').appendChild(menuPageDiv);

        //MENU TITLE
        //creating menu title
        const menuPageTitle = document.createElement('h1');
        menuPageTitle.textContent = "test menu";
        menuPageTitle.classList.add('menuTitle');
        menuPageDiv.appendChild(menuPageTitle);

        //creating menu div
        const menuItemsDiv = document.createElement('div');
        menuItemsDiv.classList.add('menuItems');
        
        menuPageDiv.appendChild(menuItemsDiv);

        //appending menu items to menupagediv
        menuItemsDiv.appendChild(new menuItem('#', 'test item 1', '$1', 'this is test item 1').createMenuItem());

        menuItemsDiv.appendChild(new menuItem('#', 'test item 2', '$2', 'this is test item 2').createMenuItem());

        menuItemsDiv.appendChild(new menuItem('#', 'test item 3', '$3', 'this is test item 3').createMenuItem());

        menuItemsDiv.appendChild(new menuItem('#', 'test item 4', '$4', 'this is test item 4').createMenuItem());
    }
    
    return { renderMenuPage }

})()

class menuItem {
    constructor(imageSrc, itemName, itemPrice, itemDesc) {
        this.imageSrc = imageSrc;
        this.itemName = itemName;
        this.itemPrice = itemPrice;
        this.itemDesc = itemDesc;
    }

    createMenuItem() {
        //create div to hold elements
        const menuItemDiv = document.createElement('div');
        menuItemDiv.classList.add('menuItem');

        //create image element
        const menuItemImg = document.createElement('img');
        menuItemImg.src = this.imageSrc;

        //create item title h2 element
        const menuItemTitle = document.createElement('h2');
        menuItemTitle.textContent = this.itemName;

        //create item price element
        const menuItemPrice = document.createElement('p');
        menuItemPrice.textContent = this.itemPrice;

        //create item desc element
        const menuItemDesc = document.createElement('p');
        menuItemDesc.textContent = this.itemDesc;

        //ATTACH TO MENU DIV
        menuItemDiv.appendChild(menuItemImg);
        menuItemDiv.appendChild(menuItemTitle);
        menuItemDiv.appendChild(menuItemPrice);
        menuItemDiv.appendChild(menuItemDesc);

        //RETURNING NEW MENU ITEM DIV TO PLACE WHEREVER
        return menuItemDiv;

    }
}

export { menuPage }