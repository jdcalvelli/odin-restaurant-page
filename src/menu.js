import { navbar } from "./nav"

const menuPage = (() => {
   
    const renderMenuPage = () => {
        navbar.renderNavBar();
        
        //test class
        document.querySelector('body').appendChild(new menuItem('#', 'test item', '$1', 'this is test item 1').createMenuItem());

        document.querySelector('body').appendChild(new menuItem('#', 'test item 2', '$2', 'this is test item 2').createMenuItem());
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