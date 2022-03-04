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
        //h1 for logo text setting
        navLogo.textContent = 'restaurant name'

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
            console.log('hello world');
        });
    }

    return { renderNavBar, bindNavBarEvents }

})()

export { navbar }