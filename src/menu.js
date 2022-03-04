import { navbar } from "./nav"

const menuPage = (() => {
   
    const renderMenuPage = () => {
        navbar.renderNavBar();

        //creating menu title
        const menuPageTitle = document.createElement('h1');
        menuPageTitle.textContent = "test menu";
        document.querySelector('.content').appendChild(menuPageTitle)

        //creating menu div
        const menuPageDiv = document.createElement('div');
        document.querySelector('.content').appendChild(menuPageDiv);

        //appending menu items to menupagediv
        menuPageDiv.appendChild(new menuItem('#', 'test item 1', '$1', 'this is test item 1').createMenuItem());

        menuPageDiv.appendChild(new menuItem('#', 'test item 2', '$2', 'this is test item 2').createMenuItem());

        menuPageDiv.appendChild(new menuItem('#', 'test item 3', '$3', 'this is test item 3').createMenuItem());

        menuPageDiv.appendChild(new menuItem('#', 'test item 4', '$4', 'this is test item 4').createMenuItem());
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