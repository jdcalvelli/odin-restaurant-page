import { contactPage } from "./contact";
import { homePage } from "./homepage";
import { menuPage } from "./menu";

const navbar = (() => {

    //outer div for navbar
    const navDiv = document.createElement('div')
    //h1 for logo to append to navDiv
    const navLogo = document.createElement('h1');
    //inner navbar elements creation
    const navUL = document.createElement('ul');
    const navLIHome = document.createElement('li');
    const navLIMenu = document.createElement('li');
    const navLIContact = document.createElement('li');

    const renderNavBar = () => {

        //DIV
        //class attachment to navDiv
        navDiv.classList.add('navDiv');

        //NAV LOGO
        //class attachment to navLogo
        navLogo.classList.add('navLogo');
        //h1 for logo text setting
        navLogo.textContent = 'restaurant name'

        //UL
        //class attachment to uls
        navUL.classList.add('navUL');

        //LI
        //class attachment to all LIs
        navLIHome.classList.add('navLI');
        navLIMenu.classList.add('navLI');
        navLIContact.classList.add('navLI');

        //inner navbar elements text setting
        navLIHome.textContent = 'home';
        navLIMenu.textContent = 'menu';
        navLIContact.textContent = 'contact';

        //inner navbar elements appending
        navUL.appendChild(navLIHome);
        navUL.appendChild(navLIMenu);
        navUL.appendChild(navLIContact);

        //appending things to navDiv
        navDiv.appendChild(navLogo);
        navDiv.appendChild(navUL);

        document.querySelector('.content').appendChild(navDiv);

        //calling bind elements
        bindNavBarEvents();
    }

    const bindNavBarEvents = () => {
        //on click for navLIHome
        navLIHome.addEventListener('click', () => {
            document.querySelector('.content').innerHTML = "";
            homePage.renderHomePage();
        });

        //on click for navLIMenu
        navLIMenu.addEventListener('click', () => {
            document.querySelector('.content').innerHTML = "";
            menuPage.renderMenuPage();
        })

        //on click for navLIContact
        navLIContact.addEventListener('click', () => {
            document.querySelector('.content').innerHTML = "";
            contactPage.renderContactPage();
        })

    }

    return { renderNavBar }

})()

export { navbar }