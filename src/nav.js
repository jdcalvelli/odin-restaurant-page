const navbar = (() => {
    //outer div for navbar
    const navDiv = document.createElement('div')
    
    //inner navbar elements creation
    const navUL = document.createElement('ul');
    const navLIHome = document.createElement('li');
    const navLIMenu = document.createElement('li');
    const navLIContact = document.createElement('li');

    //inner navbar elements text setting
    navLIHome.textContent = 'home';
    navLIMenu.textContent = 'menu';
    navLIContact.textContent = 'contact';

    //inner navbar elements appending
    navUL.appendChild(navLIHome);
    navUL.appendChild(navLIMenu);
    navUL.appendChild(navLIContact);

    navDiv.appendChild(navUL);

    document.querySelector('body').appendChild(navUL);

})()

export { navbar }